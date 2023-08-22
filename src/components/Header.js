import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

// contains objects that represent different social media profiles, contains 2 properties: icon (value from FortAwesome) and url (Corresponding social URL)
const socials = [
    {
        icon: faEnvelope,
        url: "mailto: hello@example.com",
    },
    {
        icon: faGithub,
        url: "https://github.com",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com",
    },
    {
        icon: faMedium,
        url: "https://medium.com",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com",
    },
];

const Header = () => {

    // This function will be used to handle the click events on the navigation links and also creating smooth scrolling behavior
    // when the link is clicked, the function is invoked with an anchor parameter corresponding to the section's name 
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="white"
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                    color="black"
                >
                    <nav>
                        <HStack spacing={6}>
                            {/* Add social media links based on the `socials` data  
              - iterates through each element in the socials array and applies a function that accepts 2 parameters*/}
                            {socials.map((social, index) => (
                                <a href={social.url} key={index}>
                                    <FontAwesomeIcon icon={social.icon} size="2x" />
                                </a>
                            ))}
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={8} style={{ fontSize: '22px' }}>
                            {/* Add internal links to Projects and Contact me section 
              - when the links are clicked, they invoke the handleClick function to scroll to the corresponding sections of the webpage.*/}
                            <a href="#" onClick={handleClick("projects")}>
                                PROJECTS
                            </a>
                            <a href="#" onClick={handleClick("contact")}>
                                CONTACT ME
                            </a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
};
export default Header;
