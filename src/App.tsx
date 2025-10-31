import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Box } from "./components/Box";
import { Color, Euler } from "three";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <pointLight intensity={1000} position={[-10, -5, 6]} />

        <Box
          meshProps={{ rotation: new Euler(45, -45, 0) }}
          materialProps={{ color: new Color("red") }}
        ></Box>
      </Canvas>
    </>
  );
}

export default App;
