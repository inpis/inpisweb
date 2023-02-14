import styled from "styled-components";
import { colors } from "../../../../../components/common/element/elements.js";

export const Styles = styled.div`
    .product-details-page {
        .product-details-area {
            padding : 70px 0 65px;
            .product-slider {
                .carousel-root {
                    .carousel-slider {
                        margin-bottom: 12px;
                        .slider-wrapper {
                            ul.slider {
                                
                                li.slide {
                                    border-radius: 5px;
                                    overflow : hidden;
                                    .slider-item {
                                        img {
                                            
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .thumbs-wrapper {
                        margin : 0;
                        ul.thumbs {
                            li.thumb {
                                margin-right: 11px;
                                border: none;
                                padding: 0;
                                img {
                                    border-radius: 5px;
                                    overflow: hidden;
                                }
                            }
                        }

                        button.control-arrow.control-next  {
                            opacity: 1;
                            &:before {
                                border-left-color : ${colors.text3};
                            }
                        }

                        button.control-arrow.control-prev  {
                            opacity: 1;
                            &:before {
                                border-right-color : ${colors.text3};
                            }
                        }
                    }
                }

                @media(max-width: 767px) {
                    margin-bottom : 25px;
                }
            }

            .product-information {
                margin-top : 15px;
                .product-title {
                    h4 {
                        color: ${colors.black1};
                        font-weight: 600;
                        margin-bottom: 12px;

                        @media(max-width: 575px) {
                            font-size : 20px;
                        }
                    }
                }
                .product-rating {
                    margin-bottom: 15px;
                    ul.rating {
                        li {
                            margin-right: 1px;
                            i {
                                font-size: 16px;
                                color: ${colors.yellow};
                            }
                        }
                    }
                    .review-num {
                        margin-left : 25px;
                        margin-top: -1px;
                        a {
                            font-size: 14px;
                            color: ${colors.green};
                            font-weight: 500;
                            &:hover {
                                color: ${colors.black1};
                            }
                        }
                    }
                }

                .product-price {
                    margin-bottom: 15px;
                    p.dc-price {
                        font-size: 26px;
                        color: ${colors.green};
                        font-weight: 500;
                        letter-spacing: 0;

                        @media(max-width: 575px) {
                            font-size : 20px;
                        }
                    }
                    p.ac-price {
                        font-size: 14px;
                        color: ${colors.text3};
                        font-weight: normal;
                        text-decoration: line-through;
                        margin-left: 15px;
                        margin-top: 12px;

                        @media(max-width: 575px) {
                            margin-top: 6px;
                        }
                    }
                }

                .product-desc {
                    margin-bottom: 20px;
                    p {
                        font-size: 14px;
                        color: ${colors.text3};
                        line-height: 25px;
                    }
                }

                .product-stock {
                    margin-bottom: 15px;
                    p {
                        font-size: 14px;
                        color: ${colors.text2};
                        span.stock {
                            color: ${colors.green};
                            font-weight: 500;
                            margin-left: 10px;
                        }
                        span.stock-num {
                            font-size: 13px;
                            color: ${colors.text3};
                            margin-left: 12px;
                        }
                    }
                }

                .product-color {
                    margin-bottom: 15px;
                    ul {
                        li {
                            margin-right : 8px;
                            &:first-child {
                                font-size : 14px;
                                color: ${colors.text2};
                                vertical-align: middle;
                                margin-right: 10px;
                            }
                            input[type="radio"] {
                                display: none;
                            }
                            input[type="radio"] + label {
                                margin-bottom: 0;
                                span {
                                    display: inline-block;
                                    width: 25px;
                                    height: 25px;
                                    vertical-align: middle;
                                    cursor: pointer;
                                    border-radius: 50%;
                                    text-align: center;
                                    i {
                                        font-size: 16px;
                                        color: #ffffff;
                                        padding-top: 5px;
                                        opacity: 0;
                                        transition: all 0.2s ease;
                                    }
                                }
                            }

                            input[type="radio"]#color-1 + label {
                                span {
                                    background-color: ${colors.blue};
                                }
                            }
                            input[type="radio"]#color-2 + label {
                                span {
                                    background-color: ${colors.red};
                                }
                            }
                            input[type="radio"]#color-3 + label {
                                span {
                                    background-color: ${colors.yellow};
                                }
                            }
                            input[type="radio"]#color-4 + label {
                                span {
                                    background-color: ${colors.green};
                                }
                            }
                            input[type="radio"]#color-5 + label {
                                span {
                                    background-color: ${colors.black1};
                                }
                            }

                            input[type="radio"]:checked + label {
                                span {
                                    i {
                                        opacity: 1; 
                                    }
                                }
                            }
                        }
                    }
                }
                .product-size {
                    margin-bottom : 17px;
                    ul {
                        li {
                            margin-right : 8px;
                            &:first-child {
                                font-size : 14px;
                                color: ${colors.text2};
                                vertical-align: middle;
                                margin-right: 10px;
                            }
                            input[type="radio"] {
                                display: none;
                            }
                            input[type="radio"] + label {
                                margin-bottom: 0;
                                display: inline-block;
                                border: 1px solid ${colors.border3};
                                width: 28px;
                                height: 28px;
                                color: ${colors.text2};
                                font-weight: 500;
                                vertical-align: middle;
                                padding-top: 4px;
                                cursor: pointer;
                                border-radius: 5px;
                                text-align: center;
                                margin-bottom: 0;
                            }
                            input[type="radio"]:checked + label {
                                color : #ffffff;
                                border-color: ${colors.green};
                                background-color: ${colors.green};
                            }
                        }
                    }
                }

                .product-cart-wh-com-btn {
                    a.cart-btn {
                        font-size : 14px;
                        color: #ffffff;
                        background: ${colors.gr_bg};
                        display: inline-block;
                        width: 120px;
                        height: 38px;
                        text-align: center;
                        padding: 9px;
                        border-radius: 5px;
                        font-weight: 500;
                        margin-right: 15px;
                        &:hover {
                            background: ${colors.gr_bg2}; 
                        }
                    }
                    a.wishlist-btn {
                        border: 1px solid ${colors.border3};
                        display: inline-block;
                        width: 38px;
                        height: 38px;
                        text-align: center;
                        font-size: 20px;
                        color: ${colors.green};
                        padding: 3px;
                        vertical-align: bottom;
                        border-radius: 5px;
                        margin-right: 13px;
                        &:hover {
                            background: ${colors.gr_bg};
                            color: #ffffff;
                            border-color: ${colors.green};
                        }
                    }
                    a.compare-btn {
                        border: 1px solid ${colors.border3};
                        display: inline-block;
                        width: 38px;
                        height: 38px;
                        text-align: center;
                        font-size: 20px;
                        color: ${colors.green};
                        padding: 3px;
                        vertical-align: bottom;
                        border-radius: 5px;
                        margin-right: 12px;
                        &:hover {
                            background: ${colors.gr_bg};
                            color: #ffffff;
                            border-color: ${colors.green};
                        }
                    }
                }

                @media(max-width: 991px) {
                    margin-top : 0;
                }
            }

            .product-tab {
                margin-top : 40px;
                .nav {
                    display: inline-block;
                    border-radius: 5px;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                    margin-bottom: 35px;
                    .nav-item {
                        display: inline-block;
                        a.nav-link {
                            font-size: 14px;
                            color: ${colors.black2};
                            font-weight: 500;
                            padding: 12px 30px 10px;
                            border-radius: 5px;
                        }
                        a.nav-link.active {
                            background : ${colors.gr_bg};
                            color : #ffffff;
                        }
                    }
                }

                .tab-content {
                    .description-tab {
                        p {
                            font-size: 15px;
                            color: ${colors.text2};
                            line-height: 25px;
                        }   
                    }

                    .additional-tab {
                        table.table.table-bordered {
                            margin-bottom : 0;
                            border: 1px solid ${colors.border1};
                            tr {
                                td {
                                    border: 1px solid ${colors.border1};
                                    font-size : 14px;
                                    color : ${colors.text3};
                                    padding: 12px 18px;
                                    &:first-child {
                                        color : ${colors.black1};
                                    }
                                }
                            }
                        }
                    }

                    .review-tab {
                        .review-comments {
                            margin-bottom: 40px;
                            .comment-box {
                                border-bottom: 1px solid ${colors.border1};
                                padding-bottom: 20px;
                                margin-bottom: 25px;
                                .comment-image {
                                    img {
                                        max-width : 75px;
                                        border-radius : 5px;
                                        margin-right : 20px;
                                    }
                                }
                                .comment-content {
                                    .comment-title {
                                        h6 {
                                            color: ${colors.black2};
                                            font-weight: 600;
                                            margin-bottom : 10px;
                                        }
                                    }
                                    .date-rating {
                                        margin-bottom: 10px;
                                        p {
                                            font-size : 12px;
                                            color: ${colors.text3};
                                        }
                                        ul {
                                            li {
                                                margin-right: 1px;
                                                i {
                                                    font-size: 16px;
                                                    color: ${colors.yellow};
                                                }
                                                &:last-child {
                                                    margin-right: 0;
                                                }
                                            }
                                        }
                                    }
                                    .comment-desc {
                                        p {
                                            font-size: 14px;
                                            color: ${colors.text2};
                                            line-height: 27px;
                                        }
                                    }
                                }
                                &:last-child {
                                    border-bottom : none;
                                    padding-bottom : 0;
                                    margin-bottom : 0;
                                }
                            }
                        }

                        .review-form {
                            h5 {
                                color: ${colors.black1};
                                font-weight: 600;
                                margin-bottom: 20px;
                            }
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                padding: 35px 0 30px;
            }
        }
    }

    .service-area {
        padding: 56px 0 42px;

        .sec-title {
            h4 {
                color        : ${colors.black1};
                line-height  : 35px;
                font-weight  : 600;
                max-width    : 550px;
                margin       : auto;
                margin-bottom: 40px;

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }
        }

        .service-box {
            padding   : 35px 20px 20px;
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.07);
            border-radius : 5px;
            margin-bottom: 30px;

            .box-icon {
                background  : ${colors.green};
                height      : 36px;
                text-align  : center;
                margin-right: 20px;
                position    : relative;

                i {
                    font-size : 34px;
                    color     : #ffffff;
                    width     : 60px;
                    display   : inline-block;
                    position  : relative;
                    z-index   : 111;
                    margin-top: -8px;

                    @media(max-width: 991px) {
                        font-size: 24px;
                        width: 45px;
                    }

                    @media(max-width: 767px) {
                        font-size: 34px;
                        width: 60px;
                    }
                }

                &::before {
                    content            : "";
                    position           : absolute;
                    border-width       : 15px 30px;
                    border-style       : solid;
                    border-top-color   : transparent;
                    border-right-color : transparent;
                    border-bottom-color: ${colors.green};
                    border-left-color  : transparent;
                    top                : -30px;
                    left               : 0;
                    z-index            : 1;

                    @media(max-width: 991px) {
                        border-width: 12px 23px;
                        top: -24px;
                    }

                    @media(max-width: 767px) {
                        border-width: 15px 30px;
                        top: -30px;
                    }
                }

                &:after {
                    content            : "";
                    position           : absolute;
                    border-width       : 15px 30px;
                    border-style       : solid;
                    border-top-color   : ${colors.green};
                    border-right-color : transparent;
                    border-bottom-color: transparent;
                    border-left-color  : transparent;
                    bottom             : -30px;
                    left               : 0;
                    z-index            : 1;

                    @media(max-width: 991px) {
                        border-width: 12px 23px;
                        bottom: -24px;
                    }

                    @media(max-width: 767px) {
                        border-width: 15px 30px;
                        bottom: -30px;
                    }
                }

                @media(max-width: 991px) {
                    height: 22px;
                    margin-right: 10px;
                }

                @media(max-width: 767px) {
                    height: 36px;
                    margin-right: 20px;
                }
            }

            .box-title {
                margin-top: -15px;

                h6 {
                    color         : ${colors.black1};
                    text-transform: uppercase;
                    font-weight   : 600;
                    margin-bottom : 6px;

                    @media(max-width: 991px) {
                        font-size: 13px;
                        letter-spacing: 0;
                    }

                    @media(max-width: 767px) {
                        font-size: 16px;
                        letter-spacing: 0.3px;
                    }

                    @media(max-width: 575px) {
                        font-size: 15px;
                    }
                }

                p {
                    font-size: 14px;
                    color    : ${colors.text3};

                    @media(max-width: 991px) {
                        font-size: 13px;
                        letter-spacing: 0;
                    }

                    @media(max-width: 767px) {
                        font-size: 14px;
                        letter-spacing: 0.3px;
                    }
                }
            }

            @media(max-width: 991px) {
                padding: 25px 10px 8px;
            }

            @media(max-width: 767px) {
                padding: 35px 20px;
                margin-bottom: 25px;
            }
        }

        @media(max-width: 767px) {
            padding: 30px 0 15px;
        }
    }


    
    .breadcrumb-area {
        background-size    : cover;
        background-position: center;
        background-repeat  : no-repeat;
        padding            : 60px 0;
        position           : relative;

        &:before {
            position  : absolute;
            content   : '';
            background: ${colors.bg1};
            opacity   : 0.5;
            width     : 100%;
            height    : 100%;
            top       : 0;
            left      : 0;
        }

        .breadcrumb-box {
            background: ${colors.bg1};
            display   : inline-block;
            padding   : 30px 45px;
            border-radius : 5px;

            h2.breadcrumb-title {
                color         : #ffffff;
                font-weight   : 600;
                text-transform: uppercase;
                margin-bottom : 5px;

                @media(max-width: 767px) {
                    font-size : 20px;
                }
            }

            nav {
                ol.breadcrumb {
                    display         : inline-flex;
                    padding         : 0;
                    margin-bottom   : 0;
                    background-color: transparent;
                    border-radius : 0;

                    li.breadcrumb-item {
                        a {
                            color: ${colors.green};

                            &:hover {
                                color: #ffffff;
                            }
                        }
                    }

                    li.breadcrumb-item.active {
                        color: ${colors.border3};

                        &::before {
                            color: ${colors.border3};
                        }
                    }
                }
            }
        }

        @media(max-width: 767px) {
            padding: 30px 0;
        }
    }

    .breadcrumb {
        justify-content: center;
    }
    
    
`;