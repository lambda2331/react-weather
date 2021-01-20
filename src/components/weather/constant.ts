import { WeatherType } from '../../types/enum'
import ClearSkyImg from '../../assets/img/clear-sky.svg'
import FewCloudsImg from '../../assets/img/few-clouds.svg'
import BrokenCloudsImg from '../../assets/img/broken-clouds.svg'
import ScatteredCloudsImg from '../../assets/img/scattered-clouds.svg'
import ShowerRainImg from '../../assets/img/shower-rain.svg'
import RainImg from '../../assets/img/rain.svg'
import ThunderstormImg from '../../assets/img/thunder.svg'
import SnowImg from '../../assets/img/snow.svg'
import { WeatherIconMapping } from '../../types/common'

export const weatherIconMapping: WeatherIconMapping = {
  [WeatherType.ClearSky]: ClearSkyImg,
  [WeatherType.FewClouds]: FewCloudsImg,
  [WeatherType.ScatteredClouds]: ScatteredCloudsImg,
  [WeatherType.BrokenClouds]: BrokenCloudsImg,
  [WeatherType.ShowerRain]: ShowerRainImg,
  [WeatherType.Rain]: RainImg,
  [WeatherType.Thunderstorm]: ThunderstormImg,
  [WeatherType.Snow]: SnowImg,
  [WeatherType.Mist]: FewCloudsImg
}
