import React, { Fragment } from 'react';
import './D3LineChart.scss';
import * as d3 from 'd3';

export default function D3LineChart(props: any) {

    setTimeout(() => {
        const svg = d3.select("svg"),
            margin = { top: 20, right: 20, bottom: 30, left: 60 },
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        const parseDate = d3.timeParse("%Y-%m-%d");

        const x: any = d3.scaleTime()
            .domain([new Date(1999, 0, 1), new Date(2003, 0, 0)])
            .range([0, width]);

        const y = d3.scaleLinear()
            .range([height, 0]);

        const xAxis = d3.axisBottom(x);

        const yAxis = d3.axisLeft(y);

        const area = d3.area()
            .curve(d3.curveStepAfter)
            .y0(y(0))
            .y1(function (d: any) { return y(d.value); });

        const areaPath = g.append("path")
            .attr("clip-path", "url(#clip)")
            .attr("fill", "steelblue");

        const yGroup = g.append("g");

        const xGroup = g.append("g")
            .attr("transform", "translate(0," + height + ")");

        const zoom: any = d3.zoom()
            .scaleExtent([1 / 4, 8])
            .translateExtent([[-width, -Infinity], [2 * width, Infinity]])
            .on("zoom", zoomed);

        const zoomRect = svg.append("rect")
            .attr("width", width)
            .attr("height", height)
            .attr("fill", "none")
            .attr("pointer-events", "all")
            .call(zoom);

        g.append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("width", width)
            .attr("height", height);

        const d3CsvCallback: any = function (d: any) {
            d.date = parseDate(d.date);
            d.value = +d.value;
            return d;
        };
        const d3CsvCallbackLast: any = function (error: any, data: any) {
            if (error) throw error;
            const xExtent = d3.extent(data, function (d: any) { return d.date; });
            zoom.translateExtent([[x(xExtent[0]), -Infinity], [x(xExtent[1]), Infinity]])
            const domainCallback: any = d3.max(data, function (d: any) { return d.value; });
            y.domain([0, domainCallback]);
            yGroup.call(yAxis).select(".domain").remove();
            areaPath.datum(data);
            zoomRect.call(zoom.transform, d3.zoomIdentity);
        }
        d3.csv("flights.csv", d3CsvCallback, d3CsvCallbackLast);

        function zoomed() {
            const xz = d3.event.transform.rescaleX(x);
            xGroup.call(xAxis.scale(xz));
            const areaPathCallback: any = area.x(function (d: any) { return xz(d.date) });
            areaPath.attr("d", areaPathCallback);
        }
    })


    return (
        <Fragment>
            D3LineChart
            <svg width="1000" height="300"></svg>
        </Fragment>
    )
}
