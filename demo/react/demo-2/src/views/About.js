import {useState, useEffect} from 'react'
function About() {
  const [background, setColor] = useState('red')

  useEffect(()=>{
    setTimeout(()=>{
      const color = '#' + Math.random().toString(16).slice(2,8)
      setColor(color)
    }, 1000)
  })

  return (
    <div className="about">
      <p style={{color: '#ddd'}}>使用useEffect hook函数</p>
      <div style={{ width: 100, height: 100, background}}></div>
    </div>
  );
}

export default About;
