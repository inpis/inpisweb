import styled from "styled-components";

export const Styles = styled.div`
    .gallery-page {
        .gallery-page-area {
            padding : 70px 0;
            .gallery-box {
                border-radius : 5px;
                overflow: hidden;
                margin-top: 30px;
                position: relative;
                img {
                    transition : all 0.3s ease;
                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }

            @media(max-width: 767px) {
                padding: 30px 0;
            }
        }

        .gallery-box {
            border: 1px solid #cecece;

        }
        .gallery-box h4 {
            background: #1b85c7;
            color: #fff;
            font-size: 18px;
            text-align: center;
            padding: 15px 10px;
        }
        .gallery-box > div {
            position: relative;
            overflow: hidden;
        }
        .gallery-box img {
            height: 230px !important;
        }
    }
`;