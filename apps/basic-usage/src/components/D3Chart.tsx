import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface D3ChartProps {
  data: number[];
}

export const D3Chart: React.FC<D3ChartProps> = ({ data }) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const svg = d3.select(ref.current);
      svg.selectAll('*').remove(); // 清空之前的内容

      const width = 500;
      const height = 300;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      const x = d3.scaleBand()
        .domain(data.map((d, i) => i.toString()))
        .range([margin.left, width - margin.right])
        .padding(0.1);

      const y = d3.scaleLinear()
        .domain([0, d3.max(data) as number])
        .nice()
        .range([height - margin.bottom, margin.top]);

      svg.append('g')
        .attr('fill', 'steelblue')
        .selectAll('rect')
        .data(data)
        .join('rect')
        .attr('x', (d, i) => x(i.toString())!)
        .attr('y', d => y(d))
        .attr('height', d => y(0) - y(d))
        .attr('width', x.bandwidth());

      svg.append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickFormat(i => i.toString()).tickSizeOuter(0));

      svg.append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));
    }
  }, [data]);

  return (
    <svg
      ref={ref}
      width="500"
      height="300"
      style={{ border: '1px solid black' }}
    />
  );
};