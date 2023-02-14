import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
    .campus-tour {
        background: #dfdfdf;
        padding   : 63px 0 60px;

        .sec-title {
            h4 {
                color        : ${colors.black1};
                line-height  : 35px;
                font-weight  : 600;
                max-width    : 550px;
                margin       : auto;
                margin-bottom: 48px;

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }
        }

        .tour-box {
            border-radius : 5px;
            overflow     : hidden;
            position     : relative;
            margin-bottom: 30px;

            img {
                border-radius : 5px;
                transition : all 0.3s ease;

                &:hover {
                    transform: scale(1.1);
                }

                @media(max-width: 767px) {
                    width : 100%;
                }
            }

            img.__react_modal_image__medium_img {
                border-radius : 0;
            }
        }
        @media(max-width: 767px) {
            padding: 30px 0 25px;
        }
    }

    .service-card-4 .inner {
        background: #dfdcdc;
        border-radius: 5px;
        padding: 40px 35px;
        text-align: center;
        transition: 0.4s;
        height: 100%;
    }
    .service-card-4 .inner .icon {
        position: relative;
    }
    .service-card-4 .inner .icon .subtitle {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.4s;
    }
    .service-card-4 .inner .content .title {
        font-weight: 700;
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 15px;
        margin-top: 25px;
    }

    .sal-animate {
        margin-bottom: 20px;
    }
    
    .service-card-4 .inner .content .title a {
        transition: 0.4s;
        color: #231f40;
    }
    .service-card-4 .inner .content .description {
        margin-bottom: 0;
        transition: 0.4s;
    }
    .service-card-4 {
        height: 100%;
    }
    .service-card-4:hover .inner {
        background: linear-gradient(90deg,#1b85c7 0%,#14689c 100%);
    }
    .service-card-4 .inner {
        background: #fff;
        border-radius: 5px;
        padding: 40px 35px;
        text-align: center;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        height: 100%;
        box-shadow: 0px 0px 16px 0px rgb(0 0 0 / 10%);

    }
    .service-card-4:hover .inner .icon i {
        opacity: 0;
    }
    .service-card-4 .inner .icon i {
        display: block;
        color: #525fe1;
        font-size: 35px;
    }
    .service-card-4:hover .inner .icon .subtitle {
        opacity: 1;
        color: #ffffff;
    }
    .service-card-4 .inner .icon .subtitle {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.4s;
    }
    .service-card-4:hover .inner .content .title a {
        color: #ffffff;
    }
    .service-card-4:hover .inner .content .description {
        color: #ffffff;
    }
`;