import VideoThumb from '../public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'
import '../app/css/styles.scss'
import LeftSide from './waiting-list/leftside'
import RightSide from './waiting-list/rightside'


export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
<svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient x1="50%" y1="0%" x2="60%" y2="100%" id="illustration-01">
      <stop stop-color="#FFF" offset="0%" />
      <stop stop-color="#EAEAEA" offset="77.402%" />
      <stop stop-color="#DFDFDF" offset="100%" />
    </linearGradient>
  </defs>
  <g fill-rule="evenodd">
    <circle cx="1120" cy="158" r="128" fill="url(#illustration-01)">
      <animate attributeName="r" values="128;160;128" dur="6s" repeatCount="indefinite" />
      <animate attributeName="fill" values="#b3c5fb;#e6ecfe" dur="6s" repeatCount="indefinite" />
    </circle>
    <circle cx="155" cy="443" r="64" fill="url(#illustration-01)">
      <animate attributeName="r" values="64;80;64" dur="6s" repeatCount="indefinite" />
      <animate attributeName="fill" values="#b3c5fb;#e6ecfe" dur="6s" repeatCount="indefinite" />
    </circle>
  </g>
</svg>


      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> Ace 24 </span> Cultivate lasting customer engagement: Engage, Reward, Community</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                  Boosting Business Bonds: AI Automated marketing, social integration, and crypto rewards.
                </p>
              {/* <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div> */}
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/hero.mp4"
            videoWidth={1920}
            videoHeight={1080} />

          {/* This container is waiting list, waiting list not done,front end is done, backend api not done, don't publish it */}
          {/* <div className="container">
            <LeftSide/>
            <RightSide/>
          </div> */}

        </div>

      </div>
    </section>
  )
}