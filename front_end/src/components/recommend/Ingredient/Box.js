import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const style = {
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'pointer',
  float: 'left',
  width: '6rem',
  height: '6rem',
  borderRadius: '55%'
};

const Box = ({ src, title }) =>  {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { title },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                alert(`You dropped ${item.title} into ${dropResult.name}!`);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));
    const opacity = isDragging ? 0.4 : 1;
    return (<img src={src} ref={drag} style={{  ...style, opacity }} alt={title} data-testid={`box-${src}`} title={title}/>
	);
};

export default Box;