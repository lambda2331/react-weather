import React, {useEffect} from 'react'
import styled from 'styled-components'

const Container = styled.div`
.weather {
  background-color: #DAE3FD;
  transition: background-color $speed ease;

  .thunder & {
    background-color: #9FA4AD;
  }

  .rain & {
    background-color: #D8D8D8;
  }
  
  .sun & {
    background-color: #cccff;
  }
  
  #inner {
    width: 100%;
    height: 50vh;
    background-color: rgba(255,255,255,1);
    background: linear-gradient(to bottom, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%);
  }
  
  .cloud {
    transition: fill $speed ease;
  }
  
  #cloud1 {
    fill: #efefef;
  
    .thunder & {
      fill: #9FA4AD;
    }
  }
  
  #cloud2 {
    fill: #E6E6E6;
    transform: matrix(1, 0, 0, 1, 84.1497, 0);
    transition: fill 2s ease;
    
    .thunder & {
      fill: #8B8E98;
    }
  }
  
  #cloud3 {
    fill: #D5D5D5;
    
    .thunder & {
      fill: #7B7988;
    }
  }
}
`


const Weather: React.FC = () => {
  const createCloud = () => {
    const container = document.getElementById('container1') as HTMLElement
    let settings = {
      windSpeed: 2,
      rainCount: 0,
      leafCount: 0,
      snowCount: 0,
      cloudHeight: 100,
      cloudSpace: 30,
      cloudArch: 50,
      renewCheck: 10,
      splashBounce: 80
    }
    let space  = settings.cloudSpace * 1;
    let height = space + settings.cloudHeight;
    let arch = height + settings.cloudArch + (Math.random() * settings.cloudArch);
    let width = container.getBoundingClientRect().width;

    let points = [];
    points.push('M' + [-(width), 0].join(','));
    points.push([width, 0].join(','));
    points.push('Q' + [width * 2, height / 2].join(','));
    points.push([width, height].join(','));
    points.push('Q' + [width * 0.5, arch].join(','));
    points.push([0, height].join(','));
    points.push('Q' + [width * -0.5, arch].join(','));
    points.push([-width, height].join(','));
    points.push('Q' + [- (width * 2), height/2].join(','));
    points.push([-(width), 0].join(','));

    return points.join(' ');
  }
  useEffect(() => {
    console.log(createCloud())

  }, [])
  return (
      <Container id='container1'>
        <div id="card" className="weather">
          <svg id="inner">
            {/*<g id="cloud3" className="cloud">*/}
            {/*  <path  d='M-986,0 986,0 Q1972,65 986,130 Q493,204.83018486804676 0,130 Q-493,204.83018486804676 -986,130 Q-1972,65 -986,0'/>*/}
            {/*</g>*/}
            <g id="cloud2" className="cloud"/>
            <g id="cloud1" className="cloud">
              <path d="M-986,0 986,0 Q1972,65 986,130 Q493,227.881572790101 0,130 Q-493,227.881572790101 -986,130 Q-1972,65 -986,0"/>
            </g>
          </svg>
        </div>
      </Container>
  )
}

export default Weather