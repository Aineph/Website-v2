import * as React from "react"
import { skillsGraph } from "./SkillsGraph.module.scss"
import { Chart } from "react-chartjs-2"
import { useMemo } from "react"
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js"
import PropTypes from "prop-types"

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const SkillsGraph = ({
  backgroundColor,
  borderColor,
  borderWidth,
  data,
  name,
  options,
}) => {
  const skillsLabel = useMemo(() => Object.keys(JSON.parse(data)), [data])
  const skillsValues = useMemo(() => Object.values(JSON.parse(data)), [data])

  return (
    <div className={skillsGraph}>
      <div className={"section__heading"}>{name}</div>
      <Chart
        data={{
          labels: skillsLabel,
          datasets: [
            {
              data: skillsValues,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: borderWidth,
            },
          ],
        }}
        options={options}
        type={"radar"}
      />
    </div>
  )
}

SkillsGraph.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
}

SkillsGraph.defaultProps = {
  backgroundColor: "rgba(192, 178, 131, 0.2)",
  borderColor: "rgba(192, 178, 131, 1)",
  borderWidth: 1,
}

export default React.memo(SkillsGraph)
