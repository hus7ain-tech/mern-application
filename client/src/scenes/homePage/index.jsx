import Navbar from "scenes/navBar"
import { Box, useMediaQuery } from "@mui/material"
import { useSelector } from "react-redux";
import UserWidget from "scenes/widget/UserWidget";
import MyPostWidget from "scenes/widget/MyPostWidget";
import PostWidget from "scenes/widget/PostWidget";

const HomePage = () =>{
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const { _id, picturePath} = useSelector((state)=> state.user);

    return (
        <Box>
            <Navbar/>
            <Box
                width="100%"
                p="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block" }
                gap="0.5rem"
                justifyContent="space-between"
            >
                <Box flexBasis = {isNonMobileScreens ? "26%" : undefined}>
                    <UserWidget userId={_id} picturePath={picturePath}/>
                </Box>
                <Box 
                flexBasis = {isNonMobileScreens ? "42%" : undefined}
                mt={isNonMobileScreens ? undefined :"2rem"} 
                >
                    <MyPostWidget picturePath={picturePath} />
                    <PostWidget userId={_id} />
                </Box>
                {isNonMobileScreens && <Box flexBasis="26%"> </Box>}
            </Box>
        </Box>
    )
}

export default HomePage