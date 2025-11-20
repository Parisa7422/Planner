import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto 16px;
  padding: 10px 14px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 14px;
  line-height: 1.4;

  /* Default (danger) */
  background-color: #fee2e2;
  color: #b91c1c;
  border: 1px solid #fecaca;

  .alert-icon {
    font-size: 16px;
    line-height: 1;
  }

  &.alert-success {
    background-color: #dcfce7;
    color: #166534;
    border-color: #bbf7d0;
  }

  &.alert-danger {
    background-color: #fee2e2;
    color: #b91c1c;
    border-color: #fecaca;
  }
`;

export default Wrapper;
