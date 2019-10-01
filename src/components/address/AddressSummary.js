import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

// Components
import * as Cards from "../Cards/Cards";

// Util
import { hnsValues } from "../../util/util";

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
      <Cards.Card>
        <Cards.Header>
          <Cards.HeaderTitle>Address Summary</Cards.HeaderTitle>
        </Cards.Header>
        <Cards.Content>
          <Cards.HorizontalContainer>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Received</Cards.ItemLabel>
                <Cards.ItemDetail>
                  {hnsValues(received) || (
                    <SkeletonWrapper>
                      <Skeleton />
                    </SkeletonWrapper>
                  )}
                </Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Spent</Cards.ItemLabel>
                <Cards.ItemDetail>
                  {hnsValues(spent) || (
                    <SkeletonWrapper>
                      <Skeleton />
                    </SkeletonWrapper>
                  )}
                </Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Balance</Cards.ItemLabel>
                <Cards.ItemDetail>
                  {hnsValues(confirmed) || (
                    <SkeletonWrapper>
                      <Skeleton />
                    </SkeletonWrapper>
                  )}
                </Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
          </Cards.HorizontalContainer>
        </Cards.Content>
      </Cards.Card>
    </>
  );
}
