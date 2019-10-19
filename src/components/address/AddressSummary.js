import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

// Components
import Card from "components/styles/Card";

// Util
import { hnsValues } from "utils/util";

const AddressWrapper = styled.div`
  width: 100%;
  word-wrap: break-word;
  margin-bottom: 20px;
  padding: 10px;
`;

const AddressHash = styled.div`
  font-size: 16px;
  max-width: 400px;
`;

const AddressTitle = styled(AddressHash)`
  font-weight: 700;
`;

const SkeletonWrapper = styled.div`
  width: 225px;
`;

export default function AddressSummary({ hash, received, spent, confirmed }) {
  return (
    <>
      <AddressWrapper>
        <AddressTitle>Address</AddressTitle>
        <AddressHash>{hash || <Skeleton />}</AddressHash>
      </AddressWrapper>
      <Card>
        <Card.Header>
          <Card.HeaderTitle>Address Summary</Card.HeaderTitle>
        </Card.Header>
        <Card.Content>
          <Card.HorizontalContainer>
            <Card.Column>
              <Card.ItemContainer>
                <Card.ItemLabel>Received</Card.ItemLabel>
                <Card.ItemDetail>
                  {hnsValues(received) || (
                    <SkeletonWrapper>
                      <Skeleton />
                    </SkeletonWrapper>
                  )}
                </Card.ItemDetail>
              </Card.ItemContainer>
            </Card.Column>
            <Card.Column>
              <Card.ItemContainer>
                <Card.ItemLabel>Spent</Card.ItemLabel>
                <Card.ItemDetail>
                  {hnsValues(spent) || (
                    <SkeletonWrapper>
                      <Skeleton />
                    </SkeletonWrapper>
                  )}
                </Card.ItemDetail>
              </Card.ItemContainer>
            </Card.Column>
            <Card.Column>
              <Card.ItemContainer>
                <Card.ItemLabel>Balance</Card.ItemLabel>
                <Card.ItemDetail>
                  {hnsValues(confirmed) || (
                    <SkeletonWrapper>
                      <Skeleton />
                    </SkeletonWrapper>
                  )}
                </Card.ItemDetail>
              </Card.ItemContainer>
            </Card.Column>
          </Card.HorizontalContainer>
        </Card.Content>
      </Card>
    </>
  );
}
