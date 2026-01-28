import { useState } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";

export default function App() {
  const [academic, setAcademic] = useState(0);
  const [social, setSocial] = useState(0);
  const [future, setFuture] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const data = [
    { area: "Academic Pressure", value: academic },
    { area: "Social Stress", value: social },
    { area: "Future Uncertainty", value: future },
  ];

  return (
    <div style={styles.container}>
      <h1>🧠 MindFlare</h1>
      <p>Understand Your Mental Wellness</p>

      {/* Academic Pressure */}
      <div style={styles.card}>
        <h2>📚 Academic Pressure</h2>
        <p>How overwhelmed do you feel with exams, assignments, or deadlines?</p>
        <select onChange={(e) => setAcademic(Number(e.target.value))} style={styles.select}>
          <option value="0">Select</option>
          <option value="2">Low</option>
          <option value="5">Moderate</option>
          <option value="8">High</option>
        </select>
      </div>

      {/* Social Stress */}
      <div style={styles.card}>
        <h2>👥 Social Stress</h2>
        <p>How often do social expectations or peer pressure stress you?</p>
        <select onChange={(e) => setSocial(Number(e.target.value))} style={styles.select}>
          <option value="0">Select</option>
          <option value="2">Rarely</option>
          <option value="5">Sometimes</option>
          <option value="8">Often</option>
        </select>
      </div>

      {/* Future Uncertainty */}
      <div style={styles.card}>
        <h2>🔮 Future Uncertainty</h2>
        <p>How anxious do you feel about career, job, or future stability?</p>
        <select onChange={(e) => setFuture(Number(e.target.value))} style={styles.select}>
          <option value="0">Select</option>
          <option value="2">Not anxious</option>
          <option value="5">Somewhat anxious</option>
          <option value="8">Very anxious</option>
        </select>
      </div>

      <button style={styles.submit} onClick={handleSubmit}>
        Analyze My Stress
      </button>

      {/* Result Section */}
      {submitted && (
        <div style={styles.result}>
          <h2>📊 Stress Analysis</h2>

          <RadarChart width={320} height={280} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="area" />
            <PolarRadiusAxis angle={30} domain={[0, 10]} />
            <Radar
              name="Stress Level"
              dataKey="value"
              stroke="#0fb9b1"
              fill="#0fb9b1"
              fillOpacity={0.6}
            />
            <Tooltip />
          </RadarChart>

          <p>{getFeedback(academic, social, future)}</p>
        </div>
      )}
    </div>
  );
}

/* Feedback Logic */
function getFeedback(a, s, f) {
  if (a > 6)
    return "📚 Academic stress is high. Consider better time management and short study breaks.";
  if (s > 6)
    return "👥 Social stress is affecting you. Try setting boundaries and talking openly.";
  if (f > 6)
    return "🔮 Future uncertainty is causing anxiety. Focus on small goals and skill-building.";
  return "🌈 Your stress levels are balanced. Keep maintaining healthy habits!";
}

/* Styles */
const styles = {
  container: {
    backgroundColor: "#0fb9b1",
    minHeight: "100vh",
    color: "white",
    textAlign: "center",
    padding: "30px",
    fontFamily: "Arial",
  },
  card: {
    background: "white",
    color: "#0fb9b1",
    padding: "20px",
    borderRadius: "20px",
    maxWidth: "420px",
    margin: "15px auto",
  },
  select: {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    marginTop: "10px",
  },
  submit: {
    padding: "12px 25px",
    fontSize: "16px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
  },
  result: {
    background: "#e0f7f6",
    color: "#004d4f",
    padding: "20px",
    borderRadius: "20px",
    maxWidth: "420px",
    margin: "30px auto",
  },
};
