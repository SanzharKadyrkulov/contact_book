import { Grid, IconButton } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useContactContext } from "../contexts/ContactContext";

const ContactItem = ({ item }) => {
	const { deleteContact } = useContactContext();

	return (
		<Grid item xs={12} md={6} lg={4}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					alt="green iguana"
					height={220}
					image="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{item.name} {item.surname}
					</Typography>
					<Typography variant="h6" color="text.secondary">
						{item.phoneNumber}
					</Typography>
				</CardContent>
				<CardActions>
					<IconButton onClick={() => deleteContact(item.id)} color="error">
						<DeleteOutlineIcon />
					</IconButton>
					<IconButton sx={{ color: "#001C30" }}>
						<EditIcon />
					</IconButton>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default ContactItem;
