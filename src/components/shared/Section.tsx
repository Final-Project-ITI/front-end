import { Card, CardMedia, Grid, Box, Button } from "@mui/material";
import { IMenuCategory } from "../../models/menuCategory.model";
import { MutableRefObject } from "react";

interface IProps {
  categories: IMenuCategory[];
  sectionRefs: MutableRefObject<Record<string, HTMLDivElement | null>>;
}

const Section = ({ categories, sectionRefs }: IProps) => {
  const scrollToSection = (id: string) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#E8DCCC",
        width: "100%",
        height: "252px",
        borderRadius: "25px",
        mt: "70px",
        mb: "123px",
      }}
    >
      <Grid sx={{ paddingTop: "15px" }}>
        <Grid container spacing={6} justifyContent="center">
          {categories.length
            ? categories.map((item, index) => (
                <Grid item key={index}>
                  <Card
                    sx={{
                      width: "152px",
                      height: "224px",
                      gap: "0px",
                      opacity: "0.88px",
                      backgroundColor: "transparent",
                      boxShadow: "none",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.icon}
                      alt={item.name}
                      sx={{
                        width: "100%",
                        height: "152px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        mb: "5px",
                      }}
                    />
                    <Box
                      sx={{
                        textAlign: "center",
                        padding: "0",
                      }}
                    >
                      <Button
                        sx={{
                          fontWeight: "700",
                          height: "64px",
                          fontSize: "20px",
                          color: "black",
                          transition: "background-color 0.3s",
                          "&:hover": {
                            backgroundColor: "#D74339",
                            borderRadius: "10px",
                          },
                        }}
                        onClick={() => scrollToSection(item._id)}
                      >
                        {item.name}
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))
            : ""}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section;
