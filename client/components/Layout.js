import React from "react";
import { Button, Container, Grid, Typography, Box } from "@material-ui/core";
// Assuming you still want this image, though you might change it later
import jadenAndTheBuns from "../static/Images/IMG_0797.jpg"
import JadenGrad from "../static/Images/JadenGrad.jpg"

// Define your profile links and theme colors
const GITHUB_URL = "http://github.com/jadenrosoff";
const LINKEDIN_URL = "https://www.linkedin.com/in/jaden-rosoff/";
const RESUME_FILE_PATH = "/static/Your_Resume.pdf"; // IMPORTANT: Replace with your actual resume path

const PRIMARY_COLOR = "#9f7ae0"; // Deep Purple
const TEXT_COLOR = "#FFFFFF"; // White

const Layout = () => {

	// Helper function to handle external links
	const handleLinkClick = (url) => {
		window.open(url, '_blank');
	};

	return (
		// Apply purple background to the whole viewport
		<Container
			maxWidth={false} // Allows the container to span the full width
			style={{
				backgroundColor: PRIMARY_COLOR,
				minHeight: "100vh",
				padding: 0
			}}
		>
			{/* --- Navigation Menu --- */}
			<Box style={{ padding: '20px', textAlign: 'center' }}>
				<Button
					onClick={() => handleLinkClick(RESUME_FILE_PATH)}
					style={{ color: TEXT_COLOR, marginRight: '10px', borderColor: TEXT_COLOR }}
					variant="outlined"
				>
					Resume
				</Button>
				<Button
					onClick={() => handleLinkClick(GITHUB_URL)}
					style={{ color: TEXT_COLOR, marginRight: '10px', borderColor: TEXT_COLOR }}
					variant="outlined"
				>
					GitHub
				</Button>
				<Button
					onClick={() => handleLinkClick(LINKEDIN_URL)}
					style={{ color: TEXT_COLOR, borderColor: TEXT_COLOR }}
					variant="outlined"
				>
					LinkedIn
				</Button>
			</Box>

			{/* --- Main Content --- */}
			<Grid
				container
				direction={"column"}
				justify={"center"}
				alignContent={"center"}
				alignItems={"center"}
				spacing={4} // Increased spacing for better look
				style={{ minHeight: "calc(100vh - 80px)" }} // Adjusted height to account for menu
			>
				<Grid item>
					<Typography variant={"h4"} style={{ color: TEXT_COLOR }}>
						It's Jaden Rosoff's Website!
					</Typography>
				</Grid>
				<Grid item>
					<img
						src={JadenGrad}
						alt="A picture of jaden rosoff on a statue stand"
						style={{ width: 500, height: "auto", borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Layout;