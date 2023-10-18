import { Container, Image, Row, Col } from "react-bootstrap";
import Title from "../Body/Title";
import ListItem from "./ListItem";

const listData = [
  {
    id: 1,
    date: "JUL 16",
    title: "DETROIT,MI",
    description: "DTE Energy Music Threater",
  },
  {
    id: 2,
    date: "JUL 19",
    title: "TORONTO,ON",
    description: "BUDWEISER STAGE",
  },
  {
    id: 3,
    date: "JUL 22",
    title: "BRISTOW, VA",
    description: "JIGGY LUBE LIVE",
  },
  {
    id: 4,
    date: "JUL 29",
    title: "PHOENIX, AZ",
    description: "AK-CHIN PAVILION",
  },
  {
    id: 5,
    date: "AUG 2",
    title: "LAS VEGAS, NV",
    description: "T-MOBILE ARENA",
  },
  {
    id: 6,
    date: "AUG 7",
    title: "CONCORD, CA",
    description: "CONCORD PAVILION",
  },
];

export default (props) => {
    const listItem=listData.map(item=>{
        return <ListItem key={item.id} item={item}/>
    })
  return (
    <>
      <Container className="mt-5 text-center">
        <Title />
        <h1 className="text-center">TOURS</h1>
      </Container>
      <Container className="">
        <ul className="list-group">
            {listItem}
        </ul>
      </Container>
    </>
  );
};
