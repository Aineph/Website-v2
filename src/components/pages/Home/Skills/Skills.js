import * as React from "react"
import { skills } from "./Skills.module.scss"
import { useMemo } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "gatsby-plugin-react-i18next"
import SkillsGraph from "./SkillsGraph"

const Skills = ({ musicSkills, techSkills }) => {
  const { t } = useTranslation()
  const graphOptions = useMemo(
    () => ({
      events: [],
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 100,
          ticks: {
            display: false,
          },
        },
      },
    }),
    []
  )

  return (
    <div className={skills}>
      <SkillsGraph data={techSkills} name={t("tech")} options={graphOptions} />
      <SkillsGraph
        data={musicSkills}
        name={t("music")}
        options={graphOptions}
      />
    </div>
  )
}

Skills.propTypes = {
  musicSkills: PropTypes.string.isRequired,
  techSkills: PropTypes.string.isRequired,
}

Skills.defaultProps = {}

export default React.memo(Skills)
