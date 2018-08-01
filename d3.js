import { line } from "d3-shape";
import { scaleTime, scaleLinear } from "d3-scale";
import { axisBottom, axisLeft } from 'd3-axis';
import { timeParse } from "d3-time-format";
import { select, Selection } from "d3-selection";
import { csv } from "d3-request";
import { extent } from "d3-array";
import { transition, Transition } from "d3-transition";

export default {
  line: line,
  scaleTime: scaleTime,
  scaleLinear: scaleLinear,
  axisBottom: axisBottom,
  axisLeft: axisLeft,
  timeParse: timeParse,
  select: select,
  csv: csv,
  extent: extent,
  transition: transition
}
