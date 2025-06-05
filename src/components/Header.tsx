import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { FaHome, FaUser, FaBriefcase, FaFileCode, FaEnvelope } from "react-icons/fa";

const Header = () => (
	<header className="p-4 shadow flex justify-evenly items-center sticky top-0 bg-gray-800 z-50">
		<h1 className="text-white text-xl font-semibold">Bintang Rizqi Pasha</h1>
		<div className=""></div>
		<NavigationMenu viewport={false}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="text-black">Menu</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavigationMenuList>
							<ul>
								<li>
									<NavigationMenuItem>
										<NavigationMenuLink
											href="/"
											className="text-black flex flex-row items-center"
										>
											<FaHome className="text-gray-700 size-4" /> Home
										</NavigationMenuLink>
									</NavigationMenuItem>
								</li>
								<li>
									<NavigationMenuItem>
										<NavigationMenuLink
											href="#aboutSection"
											className="text-black flex flex-row items-center"
										>
											<FaUser className="text-gray-700 size-4" />
											About
										</NavigationMenuLink>
									</NavigationMenuItem>
								</li>
								<li>
									<NavigationMenuItem>
										<NavigationMenuLink
											href="#experienceSection"
											className="text-black flex flex-row items-center"
										>
											<FaBriefcase className="text-gray-700 size-4" />
											Experiences
										</NavigationMenuLink>
									</NavigationMenuItem>
								</li>
								<li>
									<NavigationMenuItem>
										<NavigationMenuLink
											href="#projectSection"
											className="text-black flex-row items-center"
										>
											<FaFileCode className="text-gray-700 size-4" /> Projects
										</NavigationMenuLink>
									</NavigationMenuItem>
								</li>
								<li>
									<NavigationMenuItem>
										<NavigationMenuLink
											href="#contactSection"
											className="text-black flex flex-row items-center"
										>
											<FaEnvelope className="text-gray-700 size-4" />
											Contact
										</NavigationMenuLink>
									</NavigationMenuItem>
								</li>
							</ul>
						</NavigationMenuList>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	</header>
);

export default Header;
