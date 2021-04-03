import React from "react";

import { Button, Container, Grid, Typography } from "@material-ui/core";

import jadenAndTheBuns from "../static/Images/IMG_0797.jpg"
const Layout = () => {

	return (
		<Container>
			<Grid
				container
				direction={"column"}
				justify={"center"}
				alignContent={"center"}
				alignItems={"center"}
				spacing={2}
				style={{ height: "100vh" }}
			>
				<Grid item>
					<Typography variant={"h4"}>Hello World!</Typography>
				</Grid>
				<Grid item>
				<img src={jadenAndTheBuns} alt="Jaden And The Buns" style={{width:500, height:"auto"}}>
					</img>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Layout;
