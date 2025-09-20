"use client";

import * as d3geo from "d3-geo";
import { useEffect, useRef, useState } from "react";
import { feature } from "topojson-client";

import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";
type GlobeSVGProps = React.SVGProps<SVGSVGElement>;

import type { Topology } from "topojson-specification";

const REGIONS_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const BASE_SIZE = 500;
const ROT_SPEED = 0.3;
const DAMPING = 1400;

export function GlobeSVG(props: GlobeSVGProps) {
  const [rotation, setRotation] = useState<[number, number, number]>([
    0, -20, 0,
  ]);
  const [countries, setCountries] = useState<FeatureCollection<
    Geometry,
    GeoJsonProperties
  > | null>(null);

  const pointerX = useRef<number | null>(null);
  const velocity = useRef(ROT_SPEED);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      setRotation(([λ, φ, γ]) => [λ + velocity.current, φ, γ]);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // cargar países
  useEffect(() => {
    fetch(REGIONS_URL)
      .then((res) => res.json())
      .then((topology: Topology) => {
        const geojson = feature(
          topology,
          topology.objects.countries,
        ) as FeatureCollection<Geometry, GeoJsonProperties>;
        setCountries(geojson);
      });
  }, []);

  // drag con mouse
  const onPointerDown = (clientX: number) => {
    pointerX.current = clientX;
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (pointerX.current !== null) {
      const delta = e.clientX - pointerX.current;
      pointerX.current = e.clientX;

      // actualiza la rotación directamente
      setRotation(([λ, φ, γ]) => [λ + (delta / DAMPING) * 180, φ, γ]);

      // ajusta la velocidad momentánea según el drag
      velocity.current = (delta / DAMPING) * 180;
    }
  };

  const handlePointerUp = () => {
    pointerX.current = null;
    velocity.current = ROT_SPEED; // vuelve a auto-rotación normal
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
  };

  // proyección con rotación actual
  const projection = d3geo
    .geoOrthographic()
    .translate([BASE_SIZE / 2, BASE_SIZE / 2])
    .scale(BASE_SIZE * 0.5)
    .clipAngle(90)
    .rotate(rotation);

  const pathGenerator = d3geo.geoPath(projection);

  return (
    <svg
      {...props}
      viewBox={`0 0 ${BASE_SIZE} ${BASE_SIZE}`}
      className={props.className}
      style={{ display: "block", margin: "0 auto", userSelect: "none" }}
      onPointerDown={(e) => onPointerDown(e.clientX)}
    >
      {/* líneas de graticule */}
      <path
        d={pathGenerator(d3geo.geoGraticule10()) ?? ""}
        fill="none"
        stroke="#94a3b8"
        strokeWidth={0.5}
        opacity={0.7}
      />

      {/* países */}
      {countries?.features.map((f, i) => {
        const isMexico = f.id === "484" || f.properties?.name === "Mexico"; // por si acaso

        return (
          <path
            key={i}
            d={pathGenerator(f) ?? ""}
            fill={isMexico ? "#e30613" : "#e2e8f0"} // rojo claro si es México
            stroke="#64748b"
            strokeWidth={0.3}
          />
        );
      })}
    </svg>
  );
}
