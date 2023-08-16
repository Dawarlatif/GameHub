import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "green" : "yellow";

  return (
    <Badge paddingX={2} colorScheme={color}>
      {score}{" "}
    </Badge>
  );
};

export default CriticScore;
