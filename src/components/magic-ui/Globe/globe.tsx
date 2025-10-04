"use client";

import * as d3geo from "d3-geo";
import { useEffect, useRef, useState } from "react";
import { feature } from "topojson-client";

import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";
import type { ComponentPropsWithoutRef } from "react";
import type { Topology } from "topojson-specification";

const REGIONS_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const BASE_SIZE = 500;
const ROT_SPEED = 0.3;
const DAMPING = 1400;

const highlightedCountriesByName = ["Mexico", "Peru", "Guatemala", "El Salvador", "Dominican Rep.", "Ecuador"];

type GlobeSVGProps = ComponentPropsWithoutRef<"canvas">;

export function GlobeSVG(props: GlobeSVGProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [countries, setCountries] = useState<FeatureCollection<
    Geometry,
    GeoJsonProperties
  > | null>(null);

  const rotation = useRef<[number, number, number]>([0, -20, 0]);
  const velocity = useRef(ROT_SPEED);
  const pointerX = useRef<number | null>(null);

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

  // animación
  useEffect(() => {
    if (!countries) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const projection = d3geo
      .geoOrthographic()
      .translate([BASE_SIZE / 2, BASE_SIZE / 2])
      .scale(BASE_SIZE * 0.48)
      .clipAngle(90);

    const path = d3geo.geoPath(projection, ctx);

    const render = () => {
      if (!ctx) return;

      // limpiar canvas
      ctx.clearRect(0, 0, BASE_SIZE, BASE_SIZE);

      // aplicar rotación actual
      projection.rotate(rotation.current);

      // dibujar graticule (líneas)
      ctx.beginPath();
      path(d3geo.geoGraticule10());
      ctx.strokeStyle = "rgba(148,163,184,0.7)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // dibujar países
        countries.features.forEach((f) => {
            const name = f.properties?.name;
            const isHighlighted = highlightedCountriesByName.includes(name);

            ctx.beginPath();
            path(f);
            ctx.fillStyle = isHighlighted ? "#e30613" : "#e2e8f0";
            ctx.fill();
            ctx.strokeStyle = "#64748b";
            ctx.lineWidth = 0.3;
            ctx.stroke();
        });
    };

    let raf = 0;
    const tick = () => {
      rotation.current[0] += velocity.current; // auto-rotación
      render();
      raf = requestAnimationFrame(tick);
    };

    tick();
    return () => cancelAnimationFrame(raf);
  }, [countries]);

  // drag con mouse
  const onPointerDown = (e: React.PointerEvent) => {
    pointerX.current = e.clientX;
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (pointerX.current !== null) {
      const delta = e.clientX - pointerX.current;
      pointerX.current = e.clientX;
      rotation.current[0] += (delta / DAMPING) * 180;
      velocity.current = (delta / DAMPING) * 180; // inercia
    }
  };

  const handlePointerUp = () => {
    pointerX.current = null;
    velocity.current = ROT_SPEED; // volver a velocidad normal
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
  };

  return (
    <canvas
      ref={canvasRef}
      width={BASE_SIZE}
      height={BASE_SIZE}
      {...props}
      onPointerDown={onPointerDown}
    />
  );
}
