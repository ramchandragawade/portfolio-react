import Project from './Project';
import { motion, useScroll, useSpring } from "framer-motion";
import './portfolio.scss';
import { useRef } from 'react';
const items = [
  {
    id: 1,
    title: 'React commerce',
    img: 'https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos similique nesciunt officia aliquam nulla, delectus impedit cupiditate amet voluptates perferendis eaque qui libero a explicabo natus expedita. Ab, animi accusamus!Ratione culpa autem quas placeat distinctio, modi rerum qui voluptate unde.Temporibus, optio magni consequuntur assumenda asperiores fugit! Porro nobis repellat quisquam? Commodi, nisi quos nihil provident iure asperiores veritatis!'
  }, {
    id: 2,
    title: 'NextJs commerce',
    img: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos similique nesciunt officia aliquam nulla, delectus impedit cupiditate amet voluptates perferendis eaque qui libero a explicabo natus expedita. Ab, animi accusamus!Ratione culpa autem quas placeat distinctio, modi rerum qui voluptate unde.Temporibus, optio magni consequuntur assumenda asperiores fugit! Porro nobis repellat quisquam? Commodi, nisi quos nihil provident iure asperiores veritatis!'
  }, {
    id: 3,
    title: 'YelpCamp',
    img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos similique nesciunt officia aliquam nulla, delectus impedit cupiditate amet voluptates perferendis eaque qui libero a explicabo natus expedita. Ab, animi accusamus!Ratione culpa autem quas placeat distinctio, modi rerum qui voluptate unde.Temporibus, optio magni consequuntur assumenda asperiores fugit! Porro nobis repellat quisquam? Commodi, nisi quos nihil provident iure asperiores veritatis!'
  }, {
    id: 4,
    title: 'MERN CRUD NOTES',
    img: 'https://images.unsplash.com/photo-1600783245891-f275a1575d93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos similique nesciunt officia aliquam nulla, delectus impedit cupiditate amet voluptates perferendis eaque qui libero a explicabo natus expedita. Ab, animi accusamus!Ratione culpa autem quas placeat distinctio, modi rerum qui voluptate unde.Temporibus, optio magni consequuntur assumenda asperiores fugit! Porro nobis repellat quisquam? Commodi, nisi quos nihil provident iure asperiores veritatis!'
  }
];


const Portfolio = () => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map(itm=>(
        <Project key={itm.id} item={itm}/>
      ))}
    </div>
  )
}

export default Portfolio