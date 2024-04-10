import { Typography } from '@mui/material';

export const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1'>Heading 1</Typography>
            <Typography variant='h2'>Heading 2</Typography>
            <Typography variant='h3'>Heading 3</Typography>
            {//makes it look like a h1 tag but with h4 styling. Gutterbottom is margin-bottom
            }
            <Typography variant='h4' component='h1'> Heading 4</Typography>
            <Typography variant='h5'>Heading 5</Typography>
            <Typography variant='h6'>Heading 6</Typography>

            <Typography variant='subtitle1'>Subtitle 1</Typography>
            <Typography variant='subtitle2'>Subtitle 2</Typography>

            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis explicabo beatae in minima voluptate temporibus, ipsam earum qui recusandae est illo velit provident distinctio, eligendi, placeat tenetur debitis accusamus libero.</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem minima enim voluptatibus quos, hic eligendi laboriosam nihil perferendis pariatur ipsum nemo explicabo ab ex? Consequatur sit dolorem modi commodi illum!</Typography>
        </div>
    );
    }