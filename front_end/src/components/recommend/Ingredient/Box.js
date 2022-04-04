import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import React, {useState, useEffect} from 'react';
import { CircularProgress } from "@mui/material";


const style = {
  cursor: 'pointer',
  float: 'left',
  width: '5.5rem',
  height: '5.5rem',
  borderRadius: '55%',
};


const Box = ({ src, title }) =>  {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    setTimeout(4000)
    setIsLoading(false);
    },[isLoading]);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { src, title },
        // end: (item, monitor) => {
        //     const dropResult = monitor.getDropResult();
        //     if (item && dropResult) {
        //         alert(`You dropped ${item.title} into Bowl!`);
        //     }
        // },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));

    const opacity = isDragging ? 0.4 : 1;
    
    return (
        <>
        {isLoading ?    
            <CircularProgress /> :
            <img
                src={src} 
                ref={drag} 
                style={{  ...style, opacity }} 
                alt={title} 
                data-testid={`box-${src}`} 
                title={title}
            />
        }
        </>
	);
};

export default React.memo(Box);
