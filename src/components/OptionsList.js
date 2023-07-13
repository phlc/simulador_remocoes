import { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
} from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

function OptionsList() {
  const [items, setItems] = useState([
    {
      id: 0,
      estado: '',
      cidade: '',
      vara: 'Sem Lotação',
    },
    {
      id: 1,
      estado: 'Acre',
      cidade: 'Rio Branco',
      vara: '1ª Geral',
    },
    {
      id: 2,
      estado: 'Acre',
      cidade: 'Rio Branco',
      vara: '2ª Geral',
    },
    {
      id: 3,
      estado: 'Acre',
      cidade: 'Rio Branco',
      vara: '3ª Geral',
    },
    {
      id: 4,
      estado: 'Acre',
      cidade: 'Rio Branco',
      vara: '4ª Juizado Especial Cível e Criminal',
    },
    {
      id: 5,
      estado: 'Acre',
      cidade: 'Rio Branco',
      vara: '3ª Execução Fiscal (Antiga 25ª Vara)',
    },
    {
      id: 6,
      estado: 'Acre',
      cidade: 'Rio Branco',
      vara: '2ª Relatoria TR',
    },
    {
      id: 7,
      estado: 'Acre',
      cidade: 'Rio Branco',
      vara: '3ª Relatoria TR',
    },
    {
      id: 8,
      estado: 'Acre',
      cidade: 'Cruzeiro do Sul',
      vara: 'Vara Única',
    },
    {
      id: 9,
      estado: 'Amapá',
      cidade: 'Macapá',
      vara: '1ª Cível',
    },
    {
      id: 10,
      estado: 'Amapá',
      cidade: 'Macapá',
      vara: '2ª Cível',
    },
    {
      id: 11,
      estado: 'Amapá',
      cidade: 'Macapá',
      vara: '3ª Juizado Especial Cível',
    },
  ]);

  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    var updatedList = [...items];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setItems(() => updatedList);
    console.log(updatedList);
  };

  return (
    <DragDropContext onDragEnd={handleDrop}>
      <Droppable droppableId="list-container" direction="vertical">
        {(provided) => (
          <div
            className="list-container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <List
              style={{
                height: '46vh',
                overflowY: 'scroll',
              }}
            >
              {items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={`${item.id}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="item-container"
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <ListItem>
                        <Avatar
                          sx={{
                            fontSize: 14,
                            width: 30,
                            height: 30,
                            marginRight: 1,
                            bgcolor: 'primary.main',
                          }}
                        >
                          {index + 1}
                        </Avatar>
                        <ListItemText
                          primaryTypographyProps={{
                            whiteSpace: 'normal',
                            fontSize: '14px',
                            marginRight: 2.5,
                          }}
                          primary={`${item.vara} ${item.cidade} ${item.estado}`}
                        />

                        <ListItemSecondaryAction>
                          <ListItemIcon>
                            <DragIndicatorIcon sx={{ marginRight: 5 }} />
                          </ListItemIcon>
                        </ListItemSecondaryAction>
                        <IconButton sx={{ marginBottom: 1 }}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItem>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default OptionsList;
