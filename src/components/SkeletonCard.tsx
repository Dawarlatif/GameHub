import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Skeleton height="300px">
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default SkeletonCard;
