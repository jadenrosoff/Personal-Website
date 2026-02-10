import React from "react";
import { Button, Container, Grid, Typography, Box, Stack } from "@mui/material";
import ResumePDF from "../static/template/JadenRosoff.pdf";
import JadenGrad from "../static/Images/JadenGrad.jpg";

const GITHUB_URL = "http://github.com/jadenrosoff";
const LINKEDIN_URL = "https://www.linkedin.com/in/jaden-rosoff/";
const PRIMARY_COLOR = "#9f7ae0";
const TEXT_COLOR = "#FFFFFF";

const Layout = () => {
	const handleLinkClick = (url) => {
		window.open(url, '_blank');
	};

	return (
		<Container
			maxWidth={false}
			disableGutters
			sx={{
				backgroundColor: PRIMARY_COLOR,
				minHeight: "100vh",
				m: 0,
				p: 0
			}}
		>

			<Box sx={{ padding: '20px', textAlign: 'center' }}>
				<Stack
					direction="row"
					spacing={2}
					justifyContent="center"
				>
					<Button
						onClick={() => window.open(ResumePDF, '_blank')}
						variant="outlined"
						sx={{ color: TEXT_COLOR, borderColor: TEXT_COLOR }}
					>
						Resume
					</Button>

					<Button
						onClick={() => handleLinkClick(GITHUB_URL)}
						variant="outlined"
						sx={{ color: TEXT_COLOR, borderColor: TEXT_COLOR }}
					>
						GitHub
					</Button>

					<Button
						onClick={() => handleLinkClick(LINKEDIN_URL)}
						variant="outlined"
						sx={{ color: TEXT_COLOR, borderColor: TEXT_COLOR }}
					>
						LinkedIn
					</Button>
				</Stack>
			</Box>

			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={4}
				sx={{ minHeight: "calc(100vh - 100px)" }}
			>
				<Grid item>
					<Typography variant="h4" sx={{ color: TEXT_COLOR, fontWeight: 'bold' }}>
						It's Jaden Rosoff's Website!
					</Typography>
				</Grid>
				<Grid item>
					<Box
						component="img"
						src={JadenGrad}
						alt="Jaden Rosoff"
						sx={{
							width: { xs: '90%', sm: 500 },
							height: "auto",
							borderRadius: '12px',
							boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
						}}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Layout;