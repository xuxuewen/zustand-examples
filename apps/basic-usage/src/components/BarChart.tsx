import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface DataItem {
  label: string;
  value: number;
}

interface BarChartProps {
  data: DataItem[];
  width: number;
  height: number;
}

export const BarChart: React.FC<BarChartProps> = ({ data, width, height }) => {
  const d3Container = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3.select(d3Container.current);

      // Clear svg content before adding new elements
      svg.selectAll("*").remove();

      const margin = { top: 20, right: 30, bottom: 40, left: 40 };
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;

      const x = d3.scaleBand()
        .domain(data.map(d => d.label))
        .range([0, innerWidth])
        .padding(0.1);

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value) || 0])
        .nice()
        .range([innerHeight, 0]);

      const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      g.append("g")
        .attr("transform", `translate(0,${innerHeight})`)
        .call(d3.axisBottom(x));

      g.append("g")
        .call(d3.axisLeft(y));

      g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.label) || 0)
        .attr("y", d => y(d.value))
        .attr("width", x.bandwidth())
        .attr("height", d => innerHeight - y(d.value))
        .attr("fill", "steelblue");
    }
  }, [data, width, height]);

  return (
    <svg
      className="d3-component"
      width={width}
      height={height}
      ref={d3Container}
    />
  );
};