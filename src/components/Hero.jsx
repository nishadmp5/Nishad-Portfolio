import React, { useRef } from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import assets from "../assets/assets";
import { RiArrowDownDoubleFill } from "react-icons/ri";

function Model({ url }) {
    const meshRef = useRef();
  const { scene } = useGLTF(url);
  scene.scale.set(1, -1, -1);

  useFrame(()=>{
    if(meshRef.current){
        meshRef.current.rotation.y += 0.005;
    }
  })

  return (
    <mesh ref={meshRef} scale={[1.8,1.8,2.2]} rotation={[Math.PI/-10,0,-0.2]} position={[0,0,0]}>
      <primitive object={scene} />
    </mesh>
  );
}

const Hero = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center pt-20 pb-10">
      <div className="mt-16 lg:mt-12 relative flex justify-center items-center w-full">
        <div className="text-secondary text-[3.4rem] lg:text-[10rem] leading-none z-10 font-primaryfont w-full lg:px-10">
          <h1 className="text-center lg:text-left">NISHAD</h1>
          <h1 className="text-center ">MUHAMMED</h1>
        </div>
        <div className="absolute top-60 lg:top-70 lg:left-14 ">
          <h3 className="text-primary w-auto text-xs lg:text-sm">
            10.8057°76.1957°
          </h3>
        </div>
        <div className="absolute flex items-center justify-center z-10 -top-5 lg:-top-14  rounded-full w-72 lg:w-[42rem] h-72 lg:h-[42rem]">
          <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1} />
            <directionalLight intensity={2} />

            <Model url="/n-letter.glb" />
          </Canvas>
        </div>
        <div className="absolute flex items-center justify-center animate-spin -top-5 lg:-top-14  border-2 border-dotted border-neutral-700 rounded-full w-72 lg:w-[42rem] h-72 lg:h-[42rem]" />
        <div className="absolute animate-ping-slow -top-5 lg:-top-14  border border-solid border-neutral-800 rounded-full w-72 lg:w-[42rem] h-72 lg:h-[42rem]" />
        <div className="absolute animate-ping-slow [animation-delay:1s] -top-5 lg:-top-14  border border-solid border-neutral-800 rounded-full w-72 lg:w-[42rem] h-72 lg:h-[42rem]" />
      </div>

      <div className="flex lg:px-5 justify-center lg:justify-between mt-auto items-center lg:items-end w-full">
     <div className=" items-center hidden lg:flex">
     <RiArrowDownDoubleFill className="text-tertiary text-lg w-full h-full" />
        <h3 className="text-[#8c8b7b] text-nowrap text-xs hidden lg:block">
Scroll Down</h3>
     </div>
        <div className="flex flex-col lg:flex-row gap-3 items-center justify-between ">
          <div className="bg-primary rounded-full lg:rounded-none lg:rounded-tr-lg lg:rounded-bl-lg  w-12 lg:w-12 h-12 lg:h-10 flex items-center justify-center">
            <img
              src={assets.profile}
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </div>
          <h2 className="text-secondary text-md text-center lg:text-left">
            Dynamic Frontend Developer <br /> & UI Specialist
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
