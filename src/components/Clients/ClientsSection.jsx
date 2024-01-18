import { Box, Typography } from "@mui/material";
import mayoristabb from "../../img/clients/mayoristabb.svg";
import dirtyboots from "../../img/clients/dirtyboots.svg";
import dmartina from "../../img/clients/dmartina.jpg";
import { ClientsCard } from "./ClientsCard";

export const ClientsSection = () => {
	return (
		<Box
			id="clientes"
			position="relative"
			sx={{
				minHeight: { xl: 520, lg: 510, xs: 620 },
				mt:{ xl: '-105px', lg: '-60px', sm: -60, xs: '-60px' }
			}}
		>
			<Box
				sx={{
					background: "#1c1c1c",
					height: { xl: 410, lg: 423, md: 340, sm: 220, xs: 455 },
					padding: { xs: "0 1rem", lg: 0 },
					boxShadow: "0 0 20 0 #23232333, 0 8px 20px 0 #23232333",
				}}
			>
				<Box
					sx={{
						textAlign: "center",
						padding: { xs: "0.75rem 0 0.75rem 0", lg: "3rem 0" },
					}}
				>
					<Typography
						component="h2"
						sx={{
							fontSize: { lg: '41px' },
							fontWeight: 500,
							fontFamily: "Space Grotesk",
							color: "#fff",
							mt: { lg: '-23px', xs: '5px' }
						}}
					>
						Confían en nosotros:
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						mt: { lg: '-35px', xs: '5px' }
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							flexDirection: { xs: "column", sm: "row" },
							width: { lg: "70%", md: '90%', sm: '70%'},
							height: { xs: 500, lg: "unset" },
							marginTop: { lg: '20px', md: '-70px', sm: '-140px' }
						}}
					>
						<ClientsCard
							heightWidthLG={{ height: 230, width: 230 }}
							heightWidthXS={{ height: 86, width: 86 }}
							heightWidthMD={{ height: 170, width: 170 }}
							borderRadius={{ borderRadius: "150px" }}
							clientImage={dmartina}
						/>

						<ClientsCard
							heightWidthLG={{ height: 170, width: 251 }}
							heightWidthXS={{ height: 83, width: 123 }}
							heightWidthMD={{ height: 160, width: 230 }}
							clientImage={mayoristabb}
						/>
						<ClientsCard
							heightWidthLG={{ height: 349, width: 349 }}
							heightWidthXS={{ height: 126, width: 153 }}
							heightWidthMD={{ height: 200, width: 200 }}
							clientImage={dirtyboots}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
