<<<<<<< HEAD
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Mycontext } from "../../Context/MyContext";
import { useContext } from "react";

export default function FormDialog({handleAdd}) {
  const { open, setOpen,title,setTitle } = useContext(Mycontext);

  const handleClose = () => {
    setOpen(false);
    setTitle('')
  };

  function handleSubmit(e) {
      e.preventDefault();
      handleAdd();
      handleClose();
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new todo, please enter its title below. It will be added to
            your list immediately.
          </DialogContentText>
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Todo Title"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} type="submit" form="subscription-form">
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
=======
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Mycontext } from "../../Context/MyContext";
import { useContext } from "react";

export default function FormDialog({handleAdd}) {
  const { open, setOpen,title,setTitle } = useContext(Mycontext);

  const handleClose = () => {
    setOpen(false);
    setTitle('')
  };

  function handleSubmit(e) {
      e.preventDefault();
      handleAdd();
      handleClose();
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new todo, please enter its title below. It will be added to
            your list immediately.
          </DialogContentText>
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Todo Title"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} type="submit" form="subscription-form">
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
>>>>>>> 3bc1988a9b5c50c3552602997e73d574e42c1af5
