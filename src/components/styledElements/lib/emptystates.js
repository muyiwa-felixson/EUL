import React from "react";
import styled, { ThemeConsumer } from "styled-components";
import PropTypes from "prop-types";
import { transparetize } from "polished";

const EmptyWrapper = styled("div").attrs({
  className: "flexi-emptystate-container",
})`
  display: block;
  text-align: center;
  margin: calc(10% - 5px) auto 0;
  width: 400px;
  padding: 20px 0;
`;

const Heading = styled.p`
  font-size: 20px;
  font-weight: 600;
  font-family: ${(props) => props.PrimaryFont};
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 25px;
  margin: 30px 0;
  font-family: ${(props) => props.SecondaryFont};
`;

export const EmptyState = (props) => {
  const placeholder = [
    "sms",
    "emails",
    "documents",
    "users",
    "cutomers",
    "finances",
  ];

  return (
    <ThemeConsumer>
      {(theme) => (
        <EmptyWrapper {...props}>
          {props.type && (
            <svg width="183" height="183" viewBox="0 0 183 183">
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_68"
                    data-name="Rectangle 68"
                    width="100"
                    height="141"
                    rx="6"
                    transform="translate(0.242 0.069)"
                    fill="#fff"
                    stroke="#c6c6c6"
                    stroke-width="1"
                  />
                </clipPath>
              </defs>
              <g
                id="Group_15951"
                data-name="Group 15951"
                transform="translate(-103 -89)"
              >
                <g className="flexi-placeholder-base">
                  <circle
                    id="Ellipse_16"
                    data-name="Ellipse 16"
                    cx="91.5"
                    cy="91.5"
                    r="91.5"
                    transform="translate(103 89)"
                    fill="#e8e8e8"
                  />
                  <line
                    id="Line_18"
                    data-name="Line 18"
                    x2="148.834"
                    transform="translate(119.892 241.943)"
                    fill="none"
                    stroke="#c6c6c6"
                    stroke-width="1"
                  />
                  <circle
                    id="Ellipse_19"
                    data-name="Ellipse 19"
                    cx="2"
                    cy="2"
                    r="2"
                    transform="translate(103 225)"
                    fill="#665efb"
                  />
                  <ellipse
                    id="Ellipse_20"
                    data-name="Ellipse 20"
                    cx="2"
                    cy="1.5"
                    rx="2"
                    ry="1.5"
                    transform="translate(267 112)"
                    fill="#665efb"
                    opacity="0.575"
                  />
                  <circle
                    id="Ellipse_21"
                    data-name="Ellipse 21"
                    cx="1.5"
                    cy="1.5"
                    r="1.5"
                    transform="translate(129 98)"
                    fill="#ea2a8a"
                  />
                </g>
                {["sms", "emails", "documents"].includes(props.type) && (
                  <>
                    <g
                      id="Group_15836"
                      data-name="Group 15836"
                      transform="translate(106 139.25)"
                    >
                      <g
                        id="Rectangle_7820"
                        data-name="Rectangle 7820"
                        transform="translate(0 -0.25)"
                        fill="#fff"
                        stroke="#c6c6c6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <rect width="61" height="89" stroke="none" />
                        <rect x="1" y="1" width="59" height="87" fill="none" />
                      </g>
                      <rect
                        id="Rectangle_7821"
                        data-name="Rectangle 7821"
                        width="17"
                        height="3"
                        transform="translate(9 36.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                      <rect
                        id="Rectangle_7822"
                        data-name="Rectangle 7822"
                        width="7"
                        height="3"
                        transform="translate(9 41.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                      <rect
                        id="Rectangle_7823"
                        data-name="Rectangle 7823"
                        width="17"
                        height="9"
                        transform="translate(9 24.75)"
                        fill="#c6c6c6"
                      />
                      <rect
                        id="Rectangle_7824"
                        data-name="Rectangle 7824"
                        width="17"
                        height="3"
                        transform="translate(36 36.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                      <rect
                        id="Rectangle_7825"
                        data-name="Rectangle 7825"
                        width="8"
                        height="3"
                        transform="translate(36 41.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                      <rect
                        id="Rectangle_7826"
                        data-name="Rectangle 7826"
                        width="17"
                        height="9"
                        transform="translate(36 24.75)"
                        fill="#c6c6c6"
                      />
                      <rect
                        id="Rectangle_7827"
                        data-name="Rectangle 7827"
                        width="17"
                        height="4"
                        transform="translate(36 63.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                      <rect
                        id="Rectangle_7828"
                        data-name="Rectangle 7828"
                        width="8"
                        height="3"
                        transform="translate(36 69.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                      <rect
                        id="Rectangle_7829"
                        data-name="Rectangle 7829"
                        width="17"
                        height="9"
                        transform="translate(36 52.75)"
                        fill="#c6c6c6"
                      />
                      <rect
                        id="Rectangle_7830"
                        data-name="Rectangle 7830"
                        width="17"
                        height="4"
                        transform="translate(9 63.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                      <rect
                        id="Rectangle_7831"
                        data-name="Rectangle 7831"
                        width="7"
                        height="3"
                        transform="translate(9 69.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                      <rect
                        id="Rectangle_7832"
                        data-name="Rectangle 7832"
                        width="17"
                        height="9"
                        transform="translate(9 52.75)"
                        fill="#c6c6c6"
                      />
                      <rect
                        id="Rectangle_7833"
                        data-name="Rectangle 7833"
                        width="17"
                        height="9"
                        rx="4.5"
                        transform="translate(9 8.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                    </g>
                    <g
                      id="Group_15837"
                      data-name="Group 15837"
                      transform="translate(222.25 139.25)"
                    >
                      <g
                        id="Rectangle_7820-2"
                        data-name="Rectangle 7820"
                        transform="translate(-0.25 -0.25)"
                        fill="#fff"
                        stroke="#c6c6c6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <rect width="62" height="89" stroke="none" />
                        <rect x="1" y="1" width="60" height="87" fill="none" />
                      </g>
                      <rect
                        id="Rectangle_7821-2"
                        data-name="Rectangle 7821"
                        width="17"
                        height="3"
                        transform="translate(9.75 36.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                      <rect
                        id="Rectangle_7822-2"
                        data-name="Rectangle 7822"
                        width="8"
                        height="3"
                        transform="translate(9.75 41.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                      <rect
                        id="Rectangle_7823-2"
                        data-name="Rectangle 7823"
                        width="17"
                        height="9"
                        transform="translate(9.75 24.75)"
                        fill="#c6c6c6"
                      />
                      <rect
                        id="Rectangle_7824-2"
                        data-name="Rectangle 7824"
                        width="17"
                        height="3"
                        transform="translate(36.75 36.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                      <rect
                        id="Rectangle_7825-2"
                        data-name="Rectangle 7825"
                        width="7"
                        height="3"
                        transform="translate(36.75 41.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                      <rect
                        id="Rectangle_7826-2"
                        data-name="Rectangle 7826"
                        width="17"
                        height="9"
                        transform="translate(36.75 24.75)"
                        fill="#c6c6c6"
                      />
                      <rect
                        id="Rectangle_7827-2"
                        data-name="Rectangle 7827"
                        width="17"
                        height="4"
                        transform="translate(36.75 63.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                      <rect
                        id="Rectangle_7828-2"
                        data-name="Rectangle 7828"
                        width="7"
                        height="3"
                        transform="translate(36.75 69.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                      <rect
                        id="Rectangle_7829-2"
                        data-name="Rectangle 7829"
                        width="17"
                        height="9"
                        transform="translate(36.75 52.75)"
                        fill="#c6c6c6"
                      />
                      <rect
                        id="Rectangle_7830-2"
                        data-name="Rectangle 7830"
                        width="17"
                        height="4"
                        transform="translate(9.75 63.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                      <rect
                        id="Rectangle_7831-2"
                        data-name="Rectangle 7831"
                        width="8"
                        height="3"
                        transform="translate(9.75 69.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                      <rect
                        id="Rectangle_7832-2"
                        data-name="Rectangle 7832"
                        width="17"
                        height="9"
                        transform="translate(9.75 52.75)"
                        fill="#c6c6c6"
                      />
                      <rect
                        id="Rectangle_7833-2"
                        data-name="Rectangle 7833"
                        width="17"
                        height="9"
                        rx="4.5"
                        transform="translate(9.75 8.75)"
                        fill="#c6c6c6"
                        opacity="0.407"
                      />
                    </g>
                    <g
                      id="Group_15838"
                      data-name="Group 15838"
                      transform="translate(154.75 118)"
                    >
                      <g
                        id="Rectangle_7812"
                        data-name="Rectangle 7812"
                        transform="translate(0.25 10)"
                        fill="#fff"
                        stroke={theme.PrimaryColor}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <rect width="81" height="87" stroke="none" />
                        <rect x="1" y="1" width="79" height="85" fill="none" />
                      </g>
                      <g
                        id="Group_15840"
                        data-name="Group 15840"
                        transform="translate(8.749 -0.001)"
                      >
                        <rect
                          id="Rectangle_7813"
                          data-name="Rectangle 7813"
                          width="63"
                          height="17"
                          transform="translate(0.5 19)"
                          fill={theme.PrimaryColor}
                        />
                        <g
                          id="Group_15839"
                          data-name="Group 15839"
                          transform="translate(0 38.75)"
                        >
                          <g
                            id="Group_15838-2"
                            data-name="Group 15838"
                            transform="translate(0 6.25)"
                          >
                            <rect
                              id="Rectangle_7814"
                              data-name="Rectangle 7814"
                              width="33"
                              height="4"
                              transform="translate(30.5 0)"
                              fill="#c6c6c6"
                            />
                            <rect
                              id="Rectangle_7815"
                              data-name="Rectangle 7815"
                              width="33"
                              height="4"
                              transform="translate(30.5 5)"
                              fill="#c6c6c6"
                            />
                            <rect
                              id="Rectangle_7816"
                              data-name="Rectangle 7816"
                              width="33"
                              height="4"
                              transform="translate(30.5 11)"
                              fill="#c6c6c6"
                            />
                            <rect
                              id="Rectangle_7817"
                              data-name="Rectangle 7817"
                              width="63"
                              height="4"
                              transform="translate(0.5 21)"
                              fill="#c6c6c6"
                            />
                            <rect
                              id="Rectangle_7818"
                              data-name="Rectangle 7818"
                              width="63"
                              height="4"
                              transform="translate(0.5 27)"
                              fill="#c6c6c6"
                            />
                            <rect
                              id="Rectangle_7819"
                              data-name="Rectangle 7819"
                              width="33"
                              height="4"
                              transform="translate(0.5 32)"
                              fill="#c6c6c6"
                            />
                          </g>
                          <text
                            id="T"
                            transform="translate(7.5 20.25)"
                            fill={theme.PrimaryColor}
                            font-size="22"
                            font-family="Baskerville-SemiBold, Baskerville"
                            font-weight="600"
                          >
                            <tspan x="0" y="0">
                              T
                            </tspan>
                          </text>
                        </g>
                        <circle
                          id="Ellipse_111"
                          data-name="Ellipse 111"
                          cx="13.5"
                          cy="13.5"
                          r="13.5"
                          transform="translate(57.5 -4)"
                          fill={theme.PrimaryColor}
                        />
                        {/* <path id="Path" d="M0,2.9l3.35,3.35L8.56,1.042,7.518,0,3.35,4.168,1.042,1.861Z" transform="translate(68.299 6.533)" fill="#fff"/> */}
                        {props.type === "sms" && (
                          <>
                            <g
                              id="ic_chat_bubble_48px"
                              transform="translate(63 2)"
                            >
                              <path
                                id="Path_10198"
                                data-name="Path 10198"
                                d="M18.35,4H5.594A1.594,1.594,0,0,0,4,5.594v14.35l3.189-3.189H18.35a1.594,1.594,0,0,0,1.594-1.594V5.594A1.594,1.594,0,0,0,18.35,4Z"
                                transform="translate(-4 -4)"
                                fill="#fff"
                              />
                            </g>
                          </>
                        )}
                        {props.type === "sms" && (
                          <>
                            <g
                              id="ic_chat_bubble_48px"
                              transform="translate(63 2)"
                            >
                              <path
                                id="Path_10198"
                                data-name="Path 10198"
                                d="M18.35,4H5.594A1.594,1.594,0,0,0,4,5.594v14.35l3.189-3.189H18.35a1.594,1.594,0,0,0,1.594-1.594V5.594A1.594,1.594,0,0,0,18.35,4Z"
                                transform="translate(-4 -4)"
                                fill="#fff"
                              />
                            </g>
                          </>
                        )}
                        {props.type === "emails" && (
                          <>
                            <g
                              id="ic_chat_bubble_48px"
                              transform="translate(63 3)"
                            >
                              <path
                                id="Path_10200"
                                data-name="Path 10200"
                                d="M15.459,5H1.657A.657.657,0,0,0,1,5.657V16.83a.657.657,0,0,0,.657.657h13.8a.657.657,0,0,0,.657-.657V5.657A.657.657,0,0,0,15.459,5Zm-1.1,2.218L8.776,12.147a.329.329,0,0,1-.435,0L2.754,7.218a.329.329,0,0,1,.435-.493l5.369,4.737,5.369-4.737a.329.329,0,0,1,.435.493Z"
                                transform="translate(-1 -5)"
                                fill="#fff"
                              />
                            </g>
                          </>
                        )}
                        {props.type === "documents" && (
                          <>
                            <g
                              id="ic_chat_bubble_48px"
                              transform="translate(64 3)"
                            >
                              <path
                                id="Path_10202"
                                data-name="Path 10202"
                                d="M16,1V4.2h3.2Z"
                                transform="translate(-6.539)"
                                fill="#fff"
                              />
                              <path
                                id="Path_10203"
                                data-name="Path 10203"
                                d="M16,1V4.2h3.2"
                                transform="translate(-6.539)"
                                fill="none"
                                stroke="#fff"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <path
                                id="Path_10204"
                                data-name="Path 10204"
                                d="M9.461,1H2V12.725H12.659V4.2Z"
                                fill="none"
                                stroke="#fff"
                                stroke-linecap="square"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <line
                                id="Line_123"
                                data-name="Line 123"
                                x2="2"
                                transform="translate(4.659 4)"
                                fill="none"
                                stroke="#fff"
                                stroke-linecap="square"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <line
                                id="Line_124"
                                data-name="Line 124"
                                x2="5"
                                transform="translate(4.659 7)"
                                fill="none"
                                stroke="#fff"
                                stroke-linecap="square"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <line
                                id="Line_125"
                                data-name="Line 125"
                                x2="5"
                                transform="translate(4.659 10)"
                                fill="none"
                                stroke="#fff"
                                stroke-linecap="square"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                            </g>
                          </>
                        )}
                      </g>
                    </g>
                  </>
                )}

                {["customers", "users"].includes(props.type) && (
                  <>
                    <g className="flexi-placeholder-pad">
                      <g
                        id="Rectangle_56"
                        data-name="Rectangle 56"
                        transform="translate(145 101)"
                        fill="#fff"
                        stroke="#c6c6c6"
                        stroke-width="1"
                      >
                        <rect width="100" height="141" rx="6" stroke="none" />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="99"
                          height="140"
                          rx="5.5"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Rectangle_57"
                        data-name="Rectangle 57"
                        transform="translate(153 109)"
                        fill="#e8e8e8"
                        stroke="#c6c6c6"
                        stroke-width="0.6"
                      >
                        <rect width="83" height="119" rx="2" stroke="none" />
                        <rect
                          x="0.3"
                          y="0.3"
                          width="82.4"
                          height="118.4"
                          rx="1.7"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Ellipse_17"
                        data-name="Ellipse 17"
                        transform="translate(190 231)"
                        fill="#fff"
                        stroke="#c6c6c6"
                        stroke-width="0.6"
                      >
                        <ellipse
                          cx="4"
                          cy="3.5"
                          rx="4"
                          ry="3.5"
                          stroke="none"
                        />
                        <ellipse
                          cx="4"
                          cy="3.5"
                          rx="3.7"
                          ry="3.2"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Ellipse_18"
                        data-name="Ellipse 18"
                        transform="translate(193 104)"
                        fill="#fff"
                        stroke="#c6c6c6"
                        stroke-width="0.6"
                      >
                        <circle cx="1" cy="1" r="1" stroke="none" />
                        <circle cx="1" cy="1" r="0.7" fill="none" />
                      </g>
                    </g>

                    <g className="flexi-placeholder-tab-content">
                      {" "}
                      <text
                        id="Customers"
                        transform="translate(176 146)"
                        fill="#c6c6c6"
                        font-size="5"
                        font-family="Montserrat-Bold, Montserrat"
                        font-weight="700"
                      >
                        <tspan x="0" y="0">
                          Customers
                        </tspan>
                      </text>
                      <g
                        id="Rectangle_58"
                        data-name="Rectangle 58"
                        transform="translate(163 156)"
                        fill="#fff"
                        stroke="#c6c6c6"
                        stroke-width="0.8"
                      >
                        <rect width="37" height="10" rx="1.5" stroke="none" />
                        <rect
                          x="0.4"
                          y="0.4"
                          width="36.2"
                          height="9.2"
                          rx="1.1"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Rectangle_59"
                        data-name="Rectangle 59"
                        transform="translate(205 156)"
                        fill="none"
                        stroke="#c6c6c6"
                        stroke-width="0.8"
                      >
                        <rect width="21" height="10" rx="1.5" stroke="none" />
                        <rect
                          x="0.4"
                          y="0.4"
                          width="20.2"
                          height="9.2"
                          rx="1.1"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Group_26"
                        data-name="Group 26"
                        transform="translate(165.306 158.597)"
                      >
                        <ellipse
                          id="Ellipse_22"
                          data-name="Ellipse 22"
                          cx="2.5"
                          cy="2"
                          rx="2.5"
                          ry="2"
                          transform="translate(-0.306 0.403)"
                          fill="#c6c6c6"
                        />
                        <g
                          id="Rectangle_60"
                          data-name="Rectangle 60"
                          transform="translate(7.694 0.403)"
                          fill="none"
                          stroke="#c6c6c6"
                          stroke-width="1"
                        >
                          <rect width="13" height="1" stroke="none" />
                          <rect x="0.5" y="0.5" width="12" fill="none" />
                        </g>
                        <g
                          id="Rectangle_61"
                          data-name="Rectangle 61"
                          transform="translate(7.694 2.403)"
                          fill="none"
                          stroke="#c6c6c6"
                          stroke-width="1"
                        >
                          <rect width="13" height="1" stroke="none" />
                          <rect x="0.5" y="0.5" width="12" fill="none" />
                        </g>
                      </g>
                      <g
                        id="Rectangle_62"
                        data-name="Rectangle 62"
                        transform="translate(163 167)"
                        fill="none"
                        stroke="#c6c6c6"
                        stroke-width="0.8"
                      >
                        <rect width="37" height="11" rx="1.5" stroke="none" />
                        <rect
                          x="0.4"
                          y="0.4"
                          width="36.2"
                          height="10.2"
                          rx="1.1"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Rectangle_63"
                        data-name="Rectangle 63"
                        transform="translate(205 167)"
                        fill="none"
                        stroke="#c6c6c6"
                        stroke-width="0.8"
                      >
                        <rect width="21" height="11" rx="1.5" stroke="none" />
                        <rect
                          x="0.4"
                          y="0.4"
                          width="20.2"
                          height="10.2"
                          rx="1.1"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Group_27"
                        data-name="Group 27"
                        transform="translate(165.306 170.528)"
                      >
                        <ellipse
                          id="Ellipse_22-2"
                          data-name="Ellipse 22"
                          cx="2.5"
                          cy="2"
                          rx="2.5"
                          ry="2"
                          transform="translate(-0.306 0.472)"
                          fill="#c6c6c6"
                        />
                        <g
                          id="Rectangle_60-2"
                          data-name="Rectangle 60"
                          transform="translate(7.694 0.472)"
                          fill="none"
                          stroke="#c6c6c6"
                          stroke-width="1"
                        >
                          <rect width="13" height="1" stroke="none" />
                          <rect x="0.5" y="0.5" width="12" fill="none" />
                        </g>
                        <g
                          id="Rectangle_61-2"
                          data-name="Rectangle 61"
                          transform="translate(7.694 2.472)"
                          fill="none"
                          stroke="#c6c6c6"
                          stroke-width="1"
                        >
                          <rect width="13" height="1" stroke="none" />
                          <rect x="0.5" y="0.5" width="12" fill="none" />
                        </g>
                      </g>
                      <g
                        id="Rectangle_64"
                        data-name="Rectangle 64"
                        transform="translate(163 179)"
                        fill="none"
                        stroke="#c6c6c6"
                        stroke-width="0.8"
                      >
                        <rect width="37" height="11" rx="1.5" stroke="none" />
                        <rect
                          x="0.4"
                          y="0.4"
                          width="36.2"
                          height="10.2"
                          rx="1.1"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Rectangle_65"
                        data-name="Rectangle 65"
                        transform="translate(205 179)"
                        fill="none"
                        stroke="#c6c6c6"
                        stroke-width="0.8"
                      >
                        <rect width="21" height="11" rx="1.5" stroke="none" />
                        <rect
                          x="0.4"
                          y="0.4"
                          width="20.2"
                          height="10.2"
                          rx="1.1"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Group_28"
                        data-name="Group 28"
                        transform="translate(165.306 182.459)"
                      >
                        <ellipse
                          id="Ellipse_22-3"
                          data-name="Ellipse 22"
                          cx="2.5"
                          cy="2"
                          rx="2.5"
                          ry="2"
                          transform="translate(-0.306 -0.459)"
                          fill="#c6c6c6"
                        />
                        <g
                          id="Rectangle_60-3"
                          data-name="Rectangle 60"
                          transform="translate(7.694 0.541)"
                          fill="none"
                          stroke="#c6c6c6"
                          stroke-width="1"
                        >
                          <rect width="13" height="1" stroke="none" />
                          <rect x="0.5" y="0.5" width="12" fill="none" />
                        </g>
                        <g
                          id="Rectangle_61-3"
                          data-name="Rectangle 61"
                          transform="translate(7.694 2.541)"
                          fill="none"
                          stroke="#c6c6c6"
                          stroke-width="1"
                        >
                          <rect width="13" height="1" stroke="none" />
                          <rect x="0.5" y="0.5" width="12" fill="none" />
                        </g>
                      </g>
                      <g
                        id="Rectangle_66"
                        data-name="Rectangle 66"
                        transform="translate(163 191)"
                        fill="none"
                        stroke="#c6c6c6"
                        stroke-width="0.8"
                      >
                        <rect width="37" height="10" rx="1.5" stroke="none" />
                        <rect
                          x="0.4"
                          y="0.4"
                          width="36.2"
                          height="9.2"
                          rx="1.1"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Rectangle_67"
                        data-name="Rectangle 67"
                        transform="translate(205 191)"
                        fill="none"
                        stroke="#c6c6c6"
                        stroke-width="0.8"
                      >
                        <rect width="21" height="10" rx="1.5" stroke="none" />
                        <rect
                          x="0.4"
                          y="0.4"
                          width="20.2"
                          height="9.2"
                          rx="1.1"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Group_29"
                        data-name="Group 29"
                        transform="translate(165.306 193.728)"
                      >
                        <ellipse
                          id="Ellipse_22-4"
                          data-name="Ellipse 22"
                          cx="2.5"
                          cy="2"
                          rx="2.5"
                          ry="2"
                          transform="translate(-0.306 0.272)"
                          fill="#c6c6c6"
                        />
                        <g
                          id="Rectangle_60-4"
                          data-name="Rectangle 60"
                          transform="translate(7.694 1.272)"
                          fill="none"
                          stroke="#c6c6c6"
                          stroke-width="1"
                        >
                          <rect width="13" height="1" stroke="none" />
                          <rect x="0.5" y="0.5" width="12" fill="none" />
                        </g>
                        <g
                          id="Rectangle_61-4"
                          data-name="Rectangle 61"
                          transform="translate(7.694 3.272)"
                          fill="none"
                          stroke="#c6c6c6"
                          stroke-width="1"
                        >
                          <rect width="13" height="1" stroke="none" />
                          <rect x="0.5" y="0.5" width="12" fill="none" />
                        </g>
                      </g>
                    </g>
                  </>
                )}

                {props.type === "customers" && (
                  <>
                    <g className="flexi-placeholder-variable">
                      <g
                        id="Mask_Group_4"
                        data-name="Mask Group 4"
                        transform="translate(144.758 100.931)"
                        clip-path="url(#clip-path)"
                      >
                        <ellipse
                          id="Ellipse_24"
                          data-name="Ellipse 24"
                          cx="21.5"
                          cy="21"
                          rx="21.5"
                          ry="21"
                          transform="translate(-30.758 17.069)"
                          fill="#c6c6c6"
                        />
                      </g>
                      <g
                        id="Mask_Group_5"
                        data-name="Mask Group 5"
                        transform="translate(144.758 100.931)"
                        opacity="0.398"
                        clip-path="url(#clip-path)"
                      >
                        <g
                          id="Group_46"
                          data-name="Group 46"
                          transform="translate(68.935 93.459)"
                        >
                          <ellipse
                            id="Ellipse_23"
                            data-name="Ellipse 23"
                            cx="29.5"
                            cy="30"
                            rx="29.5"
                            ry="30"
                            transform="translate(0.307 -0.39)"
                            fill="#c6c6c6"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_30"
                        data-name="Group 30"
                        transform="translate(116.919 113.525)"
                      >
                        <g
                          id="Ellipse_23-2"
                          data-name="Ellipse 23"
                          transform="translate(0.081 0.475)"
                          fill="#fff"
                          stroke={theme.PrimaryColor}
                          stroke-width="1"
                        >
                          <ellipse
                            cx="21"
                            cy="21.5"
                            rx="21"
                            ry="21.5"
                            stroke="none"
                          />
                          <ellipse
                            cx="21"
                            cy="21.5"
                            rx="20.5"
                            ry="21"
                            fill="none"
                          />
                        </g>
                        <line
                          id="Line_19"
                          data-name="Line 19"
                          y2="14.609"
                          transform="translate(21.235 14.282)"
                          fill="none"
                          stroke={theme.PrimaryColor}
                          stroke-linecap="round"
                          stroke-width="2"
                        />
                        <line
                          id="Line_20"
                          data-name="Line 20"
                          x2="14.609"
                          transform="translate(13.93 21.586)"
                          fill="none"
                          stroke={theme.PrimaryColor}
                          stroke-linecap="round"
                          stroke-width="2"
                        />
                      </g>
                      <g
                        id="Group_45"
                        data-name="Group 45"
                        transform="translate(215.682 186.436)"
                      >
                        <g
                          id="Ellipse_23-3"
                          data-name="Ellipse 23"
                          transform="translate(0.318 -0.436)"
                          fill="#fff"
                          stroke={theme.PrimaryColor}
                          stroke-width="2"
                        >
                          <ellipse
                            cx="29.5"
                            cy="30"
                            rx="29.5"
                            ry="30"
                            stroke="none"
                          />
                          <ellipse
                            cx="29.5"
                            cy="30"
                            rx="28.5"
                            ry="29"
                            fill="none"
                          />
                        </g>
                      </g>
                      <g id="team" transform="translate(227.88 202.929)">
                        <g
                          id="Group_32"
                          data-name="Group 32"
                          transform="translate(27.323 11.158)"
                        >
                          <g id="Group_31" data-name="Group 31">
                            <path
                              id="Path_13"
                              data-name="Path 13"
                              d="M396.853,229.062a10.18,10.18,0,0,0-3.581-.613.522.522,0,1,0,0,1.044,9.01,9.01,0,0,1,3.114.5.522.522,0,1,0,.467-.933Z"
                              transform="translate(-392.751 -228.449)"
                              fill={theme.PrimaryColor}
                            />
                          </g>
                        </g>
                        <g id="Group_34" data-name="Group 34">
                          <g id="Group_33" data-name="Group 33">
                            <path
                              id="Path_14"
                              data-name="Path 14"
                              d="M34.027,87.265l-2.155-.616a.219.219,0,0,1-.158-.209v-.719a3.92,3.92,0,0,0,.5-.409,3.838,3.838,0,0,0,1.175-2.777v-.993l.208-.417a3.329,3.329,0,0,0,.35-1.481V76.956a.522.522,0,0,0-.522-.522H28.4a3.315,3.315,0,0,0-3.311,3.311v.031a2.767,2.767,0,0,0,.291,1.231l.267.534v.852a4.071,4.071,0,0,0,1.674,3.292v.754c0,.116,0,.164-.431.288l-1.051.3L22.8,85.922a.521.521,0,0,0-.142-.4L21.685,84.5V82.787c.1-.085.2-.172.3-.264a6.124,6.124,0,0,0,1.929-4.452V76.7a6.031,6.031,0,0,0,.558-2.536V68.588a.522.522,0,0,0-.522-.522h-7.81a4.99,4.99,0,0,0-4.985,4.985v1.116a6.031,6.031,0,0,0,.558,2.536v1.178a6.375,6.375,0,0,0,2.232,4.866V84.5l-.972,1.021a.521.521,0,0,0-.142.4l-3.21,1.167a2.736,2.736,0,0,0-.645.338l-.5-.252a3.985,3.985,0,0,0,2-1.617.522.522,0,0,0,0-.467,9.269,9.269,0,0,1-.458-3.239c-.012-.369-.024-.717-.046-1.028a4.539,4.539,0,0,0-4.426-4.39,4.539,4.539,0,0,0-4.426,4.39c-.022.31-.034.659-.046,1.028a9.27,9.27,0,0,1-.458,3.239.522.522,0,0,0,0,.467,3.985,3.985,0,0,0,2,1.616l-1.4.7A2.184,2.184,0,0,0,0,89.838v3.855a.522.522,0,0,0,1.044,0V89.838a1.146,1.146,0,0,1,.637-1.03l1.744-.872.606.576a2.194,2.194,0,0,0,3.025,0l.606-.576.569.284a2.748,2.748,0,0,0-.42,1.457v4.016a.522.522,0,0,0,1.044,0V89.677A1.715,1.715,0,0,1,9.979,88.07l3.385-1.231,1.409,2.114a1.076,1.076,0,0,0,.792.476q.054.005.108.005a1.075,1.075,0,0,0,.762-.316l.86-.86v5.435a.522.522,0,0,0,1.044,0V88.258l.86.86a1.075,1.075,0,0,0,.762.316q.054,0,.108-.005a1.076,1.076,0,0,0,.792-.476l1.409-2.113,3.385,1.231a1.715,1.715,0,0,1,1.125,1.607v4.016a.522.522,0,1,0,1.044,0V89.677a2.758,2.758,0,0,0-.772-1.909l.129-.037a2.86,2.86,0,0,0,.486-.175L29,88.888v4.8a.522.522,0,1,0,1.044,0v-4.8l1.323-1.323a1.241,1.241,0,0,0,.222.088l2.155.616a1.157,1.157,0,0,1,.835,1.108v4.316a.522.522,0,1,0,1.044,0V89.376A2.2,2.2,0,0,0,34.027,87.265ZM3.347,86.343a3.751,3.751,0,0,1-1.675-1.075,5.751,5.751,0,0,0,.3-1.249,3.891,3.891,0,0,0,1.377,1.7Zm2.989,1.412a1.151,1.151,0,0,1-1.587,0l-.485-.461a1.08,1.08,0,0,0,.127-.51v-.556a3.88,3.88,0,0,0,2.3,0v.556a1.08,1.08,0,0,0,.127.51Zm-.793-2.4a2.829,2.829,0,0,1-2.826-2.826.519.519,0,0,0-.607-.514l0-.134c.012-.359.023-.7.043-.988a3.874,3.874,0,0,1,1.055-2.433,3.242,3.242,0,0,1,4.66,0A3.874,3.874,0,0,1,8.928,80.9c.021.291.032.629.044.988l0,.093A4.688,4.688,0,0,0,6.4,80.1a6.548,6.548,0,0,0-1.985-.314.522.522,0,0,0-.361.159l-.941.976a.522.522,0,1,0,.751.724l.783-.812c.675.033,2.845.285,3.689,2.144A2.819,2.819,0,0,1,5.543,85.36Zm2.2.985v-.622a3.859,3.859,0,0,0,1.378-1.7,5.744,5.744,0,0,0,.3,1.247A3.769,3.769,0,0,1,7.738,86.345Zm5.021-8.465V76.586a.522.522,0,0,0-.052-.227,5,5,0,0,1-.506-2.193V73.051a3.946,3.946,0,0,1,3.941-3.941h7.289v5.057a5,5,0,0,1-.506,2.193.522.522,0,0,0-.052.227v1.486a5.009,5.009,0,0,1-1.6,3.69,5.2,5.2,0,0,1-.4.339l-.009.007a5.017,5.017,0,0,1-3.386,1.01A5.168,5.168,0,0,1,12.759,77.881Zm2.938,10.5a.033.033,0,0,1-.029.01.033.033,0,0,1-.027-.016L14.019,85.94l.522-.549L17,87.073Zm2.119-2.013-2.826-1.931V83.46a5.875,5.875,0,0,0,2.42.7q.206.013.411.013a6.044,6.044,0,0,0,2.82-.691v.953Zm2.175,2.008a.033.033,0,0,1-.027.016.032.032,0,0,1-.029-.01L18.63,87.074l2.462-1.683.522.549Zm9.527-.44L28.334,86.75a1.432,1.432,0,0,0,.032-.31v-.22A3.658,3.658,0,0,0,29.4,86.4l.12,0a3.876,3.876,0,0,0,1.15-.174v.21a1.248,1.248,0,0,0,.038.3Zm1.968-3.371a2.8,2.8,0,0,1-2.055.8,2.921,2.921,0,0,1-2.738-2.965v-.975a.521.521,0,0,0-.055-.233l-.322-.645a1.719,1.719,0,0,1-.18-.765v-.031A2.27,2.27,0,0,1,28.4,77.478h4.5v2.167a2.28,2.28,0,0,1-.239,1.014l-.263.527a.521.521,0,0,0-.055.233v1.116A2.8,2.8,0,0,1,31.486,84.563Z"
                              transform="translate(0 -68.066)"
                              fill={theme.PrimaryColor}
                            />
                          </g>
                        </g>
                        <g
                          id="Group_36"
                          data-name="Group 36"
                          transform="translate(32.344 21.757)"
                        >
                          <g id="Group_35" data-name="Group 35">
                            <path
                              id="Path_15"
                              data-name="Path 15"
                              d="M465.445,380.814a.522.522,0,0,0-.522.522v3.347a.522.522,0,1,0,1.043,0v-3.347A.522.522,0,0,0,465.445,380.814Z"
                              transform="translate(-464.923 -380.814)"
                              fill={theme.PrimaryColor}
                            />
                          </g>
                        </g>
                        <g
                          id="Group_38"
                          data-name="Group 38"
                          transform="translate(2.232 22.447)"
                        >
                          <g id="Group_37" data-name="Group 37">
                            <path
                              id="Path_16"
                              data-name="Path 16"
                              d="M32.6,390.728a.522.522,0,0,0-.522.522v2.658a.522.522,0,0,0,1.044,0V391.25A.522.522,0,0,0,32.6,390.728Z"
                              transform="translate(-32.077 -390.728)"
                              fill={theme.PrimaryColor}
                            />
                          </g>
                        </g>
                        <g
                          id="Group_40"
                          data-name="Group 40"
                          transform="translate(13.389 4.74)"
                        >
                          <g id="Group_39" data-name="Group 39">
                            <path
                              id="Path_17"
                              data-name="Path 17"
                              d="M201.161,137.752c-1.973-1.973-6.1-1.6-7.786-1.342a1.071,1.071,0,0,0-.915,1.067v1.2a.522.522,0,0,0,1.044,0v-1.2a.035.035,0,0,1,.027-.035,16.483,16.483,0,0,1,3.39-.166,5.386,5.386,0,0,1,3.5,1.214.522.522,0,0,0,.738-.738Z"
                              transform="translate(-192.46 -136.203)"
                              fill={theme.PrimaryColor}
                            />
                          </g>
                        </g>
                        <g
                          id="Group_42"
                          data-name="Group 42"
                          transform="translate(11.158 22.873)"
                        >
                          <g id="Group_41" data-name="Group 41">
                            <path
                              id="Path_18"
                              data-name="Path 18"
                              d="M160.906,396.853a.522.522,0,0,0-.522.522v2.232a.522.522,0,0,0,1.044,0v-2.232A.522.522,0,0,0,160.906,396.853Z"
                              transform="translate(-160.384 -396.853)"
                              fill={theme.PrimaryColor}
                            />
                          </g>
                        </g>
                        <g
                          id="Group_44"
                          data-name="Group 44"
                          transform="translate(23.431 22.873)"
                        >
                          <g id="Group_43" data-name="Group 43">
                            <path
                              id="Path_19"
                              data-name="Path 19"
                              d="M337.328,396.853a.522.522,0,0,0-.522.522v2.232a.522.522,0,0,0,1.044,0v-2.232A.522.522,0,0,0,337.328,396.853Z"
                              transform="translate(-336.806 -396.853)"
                              fill={theme.PrimaryColor}
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </>
                )}

                {["finances"].includes(props.type) && (
                  <>
                    <g id="money" transform="translate(115 70)">
                      <g
                        id="Group_15985"
                        data-name="Group 15985"
                        transform="translate(17.757 35.75)"
                      >
                        <rect
                          id="Rectangle_7989"
                          data-name="Rectangle 7989"
                          width="19.97"
                          height="48.252"
                          transform="translate(34.505 80.293)"
                          fill="#fff"
                        />
                        <rect
                          id="Rectangle_7990"
                          data-name="Rectangle 7990"
                          width="18.82"
                          height="34.45"
                          transform="translate(0 94.095)"
                          fill="#fff"
                        />
                        <rect
                          id="Rectangle_7988"
                          data-name="Rectangle 7988"
                          width="19.97"
                          height="70.105"
                          transform="translate(105.816 58.439)"
                          fill="#fff"
                        />
                        <circle
                          id="Ellipse_122"
                          data-name="Ellipse 122"
                          cx="19.658"
                          cy="19.658"
                          r="19.658"
                          transform="translate(96.11 0)"
                          fill={theme.PrimaryColor}
                        />
                      </g>
                      <g
                        id="Group_15986"
                        data-name="Group 15986"
                        transform="translate(0 79.797)"
                      >
                        <path
                          id="Path_10247"
                          data-name="Path 10247"
                          d="M77.809,204.042a2.322,2.322,0,0,0,1.375-.412l32.856-23.508,31.756,13.2a2.631,2.631,0,0,0,2.474-.275l25.57-20.208a2.448,2.448,0,1,0-3.024-3.849l-24.47,19.383-31.618-13.2a2.366,2.366,0,0,0-2.337.275L76.434,199.643a2.442,2.442,0,0,0-.55,3.437A2.229,2.229,0,0,0,77.809,204.042Z"
                          transform="translate(-49.49 -168.457)"
                          fill={theme.PrimaryColor}
                        />
                        <path
                          id="Path_10248"
                          data-name="Path 10248"
                          d="M158.366,273.484H144.793v-67.81a2.464,2.464,0,0,0-2.474-2.474h-17.67a2.464,2.464,0,0,0-2.474,2.474v67.81H109.326c0-44.99-22.481-44.99-22.481,0H74V226.3a2.464,2.464,0,0,0-2.474-2.474H53.852a2.464,2.464,0,0,0-2.474,2.474v47.189H38.528v-33.03a2.464,2.464,0,0,0-2.474-2.474H18.522a2.464,2.464,0,0,0-2.474,2.474v33.03H2.474c-1.375,0-2.474.568-2.474,1.943s1.1,2.006,2.474,2.006H158.366c1.375,0,2.477-.522,2.477-1.9A2.213,2.213,0,0,0,158.366,273.484Zm-33.543-67.773h17.459v67.773H124.823Zm-18.009,67.773h0ZM54.026,226.332H71.485v47.015H54.026ZM18.7,240.491H36.155v32.856H18.7Z"
                          transform="translate(0 -189.647)"
                          fill="#c6c6c6"
                        />
                        <path
                          id="Rectangle_7991"
                          data-name="Rectangle 7991"
                          d="M2,0H20.428a2,2,0,0,1,2,2V45.952a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V2A2,2,0,0,1,2,0Z"
                          transform="translate(86.838 37.96)"
                          fill={theme.PrimaryColor}
                        />
                      </g>
                      <text
                        id="_"
                        data-name="₦"
                        transform="translate(124 66.093)"
                        fill="#fff"
                        font-size="29"
                        font-family="SegoeUI-Semibold, Segoe UI"
                        font-weight="600"
                      >
                        <tspan x="0" y="0">
                          ₦
                        </tspan>
                      </text>
                    </g>
                  </>
                )}
              </g>
            </svg>
          )}
          {props.title && <Heading>{props.title}</Heading>}
          {props.info && <P>{props.info}</P>}
          {props.action && <div>{props.action}</div>}
        </EmptyWrapper>
      )}
    </ThemeConsumer>
  );
};

EmptyState.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  action: PropTypes.any,
  type: PropTypes.oneOf([
    "sms",
    "emails",
    "documents",
    "users",
    "cutomers",
    "finances",
  ]),
};
