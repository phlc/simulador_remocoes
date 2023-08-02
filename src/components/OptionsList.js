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

function setItems(
  updatedList,
  selectedPerson,
  onSetSelectedPerson,
  onEditPerson
) {
  const newPerson = { ...selectedPerson, options: updatedList };
  if (onEditPerson(selectedPerson, newPerson)) {
    onSetSelectedPerson(newPerson);
  }
}

function handleDeleteLocation(
  id,
  selectedPerson,
  onSetSelectedPerson,
  onEditPerson
) {
  const newLocations = selectedPerson.options.filter((loc) => loc.id !== id);
  const newPerson = { ...selectedPerson, options: newLocations };
  if (onEditPerson(selectedPerson, newPerson)) {
    onSetSelectedPerson(newPerson);
  }
}

function OptionsList({ selectedPerson, onSetSelectedPerson, onEditPerson }) {
  if (!selectedPerson) return;

  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    var updatedList = [...selectedPerson.options];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setItems(updatedList, selectedPerson, onSetSelectedPerson, onEditPerson);
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
              {selectedPerson.options.map((item, index) => (
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
                            marginRight: 4.5,
                          }}
                          primary={`${item.vara} ${item.cidade} ${item.estado}`}
                        />

                        <ListItemSecondaryAction>
                          <ListItemIcon>
                            <DragIndicatorIcon sx={{ marginRight: 0 }} />
                          </ListItemIcon>
                          <IconButton
                            sx={{ marginBottom: 2 }}
                            onClick={() =>
                              handleDeleteLocation(
                                item.id,
                                selectedPerson,
                                onSetSelectedPerson,
                                onEditPerson
                              )
                            }
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
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
