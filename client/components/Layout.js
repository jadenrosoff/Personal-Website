import React, { useState, useEffect } from "react";
import { Button, Typography, Box, Stack, Paper, CssBaseline, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ResumePDF from "../static/template/JadenRosoff.pdf";
import JadenGrad from "../static/Images/JadenGrad.jpg";
import Boat from "../static/Images/jadenboat.jpg";
import Dawg from "../static/Images/dawg.jpg";
import Gradeng from "../static/Images/gradeng.jpg";
import Gradsmile from "../static/Images/gradsmile.jpg";
import Skilift from "../static/Images/skilift.jpg";
import Trivialgroup from "../static/Images/trivialgroup.jpg";

const GITHUB_URL = "http://github.com/jadenrosoff";
const LINKEDIN_URL = "https://www.linkedin.com/in/jaden-rosoff/";
const PRIMARY_COLOR = "#9f7ae0";
const TEXT_COLOR = "#FFFFFF";

const Layout = () => {
	const images = [JadenGrad, Boat, Dawg, Gradeng, Gradsmile, Skilift, Trivialgroup];
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	useEffect(() => {
		const timer = setInterval(nextSlide, 5000);
		return () => clearInterval(timer);
	}, [currentIndex]);

	const handleLinkClick = (url) => {
		window.open(url, '_blank');
	};

	return (
		<Box sx={{
			width: '100vw',
			height: '100dvh',
			bgcolor: PRIMARY_COLOR,
			m: 0, p: 0,
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden'
		}}>
			<CssBaseline />

			<Box sx={{ pt: { xs: 4, md: 6 }, px: 4, flex: '0 0 auto', width: '100%', textAlign: 'center' }}>
				<Typography
					variant="h1"
					sx={{
						color: TEXT_COLOR,
						fontWeight: 900,
						fontSize: { xs: '10vw', md: '11vw' },
						lineHeight: 1,
						textTransform: 'uppercase',
						letterSpacing: '-0.05em',
						whiteSpace: 'nowrap',
						textShadow: '8px 8px 0px rgba(0,0,0,0.1)',
						m: 0
					}}
				>
					JADEN ROSOFF
				</Typography>
			</Box>

			<Box sx={{
				flex: 1,
				display: 'flex',
				flexDirection: { xs: 'column', md: 'row' },
				p: { xs: 2, md: 6 },
				gap: 4,
				minHeight: 0
			}}>

				<Box sx={{
					flex: 1.2,
					borderRadius: '30px',
					position: 'relative',
					overflow: 'hidden',
					boxShadow: '10px 10px 0px rgba(0,0,0,0.15)',
					border: `4px solid ${TEXT_COLOR}`,
					display: { xs: 'none', md: 'block' }
				}}>
					{images.map((img, index) => (
						<Box
							key={index}
							component="img"
							src={img}
							sx={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								position: 'absolute',
								top: 0,
								left: 0,
								opacity: currentIndex === index ? 1 : 0,
								transition: 'opacity 0.8s ease-in-out',
								zIndex: currentIndex === index ? 1 : 0
							}}
						/>
					))}

					<IconButton
						onClick={prevSlide}
						sx={{
							position: 'absolute', left: 10, top: '50%', zIndex: 10,
							color: TEXT_COLOR, bgcolor: 'rgba(0,0,0,0.2)',
							'&:hover': { bgcolor: 'rgba(0,0,0,0.4)' }
						}}
					>
						<ArrowBackIosNewIcon />
					</IconButton>

					<IconButton
						onClick={nextSlide}
						sx={{
							position: 'absolute', right: 10, top: '50%', zIndex: 10,
							color: TEXT_COLOR, bgcolor: 'rgba(0,0,0,0.2)',
							'&:hover': { bgcolor: 'rgba(0,0,0,0.4)' }
						}}
					>
						<ArrowForwardIosIcon />
					</IconButton>
				</Box>

				<Box sx={{
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
					justifyContent: 'center'
				}}>
					<Paper sx={{
						p: 4,
						bgcolor: 'rgba(255,255,255,0.15)',
						backdropFilter: 'blur(12px)',
						color: TEXT_COLOR,
						borderRadius: '30px',
						border: '1px solid rgba(255,255,255,0.2)'
					}}>
						<Typography variant="h4" sx={{ fontWeight: 900, mb: 1, letterSpacing: '-0.02em', textAlign: 'center' }}>
							Software Engineer
						</Typography>
						<Typography variant="body1" sx={{ fontSize: '1.15rem', lineHeight: 1.6, opacity: 0.95, fontWeight: 500 }}>
							Hi! I'm Jaden, a recent University of Utah Computer Science grad with a knack for C#, Python, and sleek Web Architecture.
							When I'm not coding, you'll find me at the climbing gym or outdoors.
						</Typography>
					</Paper>

					<Stack direction="column" spacing={2}>
						<Button
							fullWidth
							startIcon={<DescriptionIcon />}
							onClick={() => window.open(ResumePDF, '_blank')}
							variant="contained"
							sx={{
								height: '65px',
								bgcolor: TEXT_COLOR,
								color: PRIMARY_COLOR,
								borderRadius: '18px',
								fontWeight: 900,
								'&:hover': { bgcolor: '#f0f0f0', transform: 'scale(1.02)' }
							}}
						>
							View Resume
						</Button>

						<Stack direction="row" spacing={2}>
							<Button
								fullWidth
								startIcon={<GitHubIcon />}
								onClick={() => handleLinkClick(GITHUB_URL)}
								variant="outlined"
								sx={{
									height: '65px',
									color: TEXT_COLOR,
									borderColor: TEXT_COLOR,
									borderRadius: '18px',
									borderWidth: 2,
									fontWeight: 900,
									'&:hover': { borderWidth: 2, bgcolor: 'rgba(255,255,255,0.1)', transform: 'scale(1.02)' }
								}}
							>
								GitHub
							</Button>
							<Button
								fullWidth
								startIcon={<LinkedInIcon />}
								onClick={() => handleLinkClick(LINKEDIN_URL)}
								variant="outlined"
								sx={{
									height: '65px',
									color: TEXT_COLOR,
									borderColor: TEXT_COLOR,
									borderRadius: '18px',
									borderWidth: 2,
									fontWeight: 900,
									'&:hover': { borderWidth: 2, bgcolor: 'rgba(255,255,255,0.1)', transform: 'scale(1.02)' }
								}}
							>
								LinkedIn
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
};

export default Layout;