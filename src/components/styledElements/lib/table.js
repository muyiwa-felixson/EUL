import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media } from './theme';
import { transparentize, darken, lighten } from 'polished';
import { Grid, Box } from './layout';
import { Input } from './input';
import { Select } from './select';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

export const TableWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Table = styled('div').attrs({
  className: 'flexi-table',
})`
    display: block;
    font-size: ${(props) => props.theme.PrimaryFontSize};
    overflow-x: auto;
    overflow-y: visible;
    ${(props) =>
    props.noBackground &&
    css`
        background-color: transparent;
        border: none;
      `}

    & table {
    background-color: #FFF;
    border-collapse: collapse;
    border-radius: ${(props) => props.theme.SecondaryRadius};
    width: 100% !important;
    ${(props) =>
    props.noBackground &&
    css`
        background-color: transparent;
        border: none;
      `}
    ${(props) =>
    props.report &&
    css`
        width: auto;
        min-width: 100%;
        & th {
          white-space: nowrap;
        }
      `}
    
    & thead{
        background-color: ${(props) => props.headBgColor};
        color: ${(props) =>
    props.headFontColor
      ? props.headFontColor
      : props.theme.PrimaryFontColor};
        ${(props) =>
    props.noBackground &&
    css`
            border-top: none;
          `}
        ${(props) =>
    props.stripped &&
    css`
            border-bottom: none;
          `}
        & th{
            text-align: left;
            border-bottom: 1px solid ${(props) => props.theme.PrimaryBorderColor};
            font-weight: bold;
            padding: ${(props) => props.cellPad ? props.cellPad : props.theme.PrimaryCellPad};
            font-size: ${(props) => props.theme.fontSize};
            ${(props) =>
    props.firstColBorder &&
    css`
                &:first-child {
                  border-right: 1px solid
                    ${(props) => props.theme.PrimaryGreyLight};
                }
              `}
            &.truncate{
                overflow: hidden;
                 & span{
                    display: block;
                    width: inherit !important;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;   
                    position: relative; 
                 }
            }
            &.fullScreenOnly{
                ${media.tablet`
                    display: none;
                `}
                ${media.phone`
                    display:none;
                `}
                ${media.desktop`
                    display: none;
                `}
            }
            & button{
                border: none;
                background: none;
                outline: none;
                cursor: pointer;

                &::after {
                    font-family: "flexibull-2-0";
                    opacity: 0.9;
                    margin-left: 20px;
                    content: '\\e803';
                    }

                &.ascending{
                    &::after {
                    font-family: "flexibull-2-0";
                    opacity: 0.9;
                    content: '\\e803';
                    }
                }

                &.descending{
                    &::after {
                    font-family: "flexibull-2-0";
                    opacity: 0.9;
                    content: '\\e802';
                    }
                }
                
            }
        }
    }
    & tbody{
        & tr{
            /* min-height: 60px; */
            border-bottom: 1px solid ${(props) => props.theme.PrimaryGreyLight};
            position: relative;
            z-index: 1;
            transition:all 0.3s ease-out;

            &:hover{
                z-index: 2;
                background-color: ${(props) =>
    transparentize(0.93, props.theme.PrimaryColor)};
            }
            ${(props) =>
    props.noBackground &&
    css`
                border-bottom: none;
              `}
            ${(props) =>
    props.stripped &&
    css`
                border-bottom: 1px solid ${(props) => transparentize(0.3, props.theme.PrimaryBorderColor)};
                &:nth-child(even) {
                  background-color: ${(props) =>
        transparentize(0.2, props.theme.PrimaryFade)};

                  &:hover {
                    z-index: 2;
                    background-color: ${(props) =>
        transparentize(0.83, props.theme.PrimaryColor)};
                  }
                }
              `}

              ${(props) =>
    props.collapsible &&
    css`
                border-bottom: 1px solid ${(props) => transparentize(0.3, props.theme.PrimaryBorderColor)};
                &:nth-child(even) {
                  background-color: ${(props) =>
        transparentize(0.4, props.theme.PrimaryFade)};
                  
                  &:hover {
                    z-index: 2;
                    background-color: none;
                  }
                }
              `}
            
            & td{
                padding: ${(props) => props.cellPad ? props.cellPad : props.theme.PrimaryCellPad};
                text-align: left;
                ${(props) =>
    props.firstColBorder &&
    css`
                    &:first-child {
                      border-right: 1px solid
                        ${(props) => props.theme.PrimaryGreyLight};
                    }
                  `}
                & a{
                    font-weight: bold;
                    color: ${(props) => props.theme.SecondaryFontColor};
                    text-decoration: none;
                    &:hover{
                        text-decoration: underline;
                    }
                }
                &.truncate{
                overflow: hidden;
                 & span{
                    display: block;
                    width: inherit !important;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;   
                    position: relative;                
                 }
            }
            &.fullScreenOnly{
                ${media.phone`
                display:none;
                `}
                ${media.tablet`
                display: none;
                `}
                ${media.desktop`
                    display: none;
                `}
            }
            }
        }
    }
     }
`;

export const TableFilter = styled.div`
  display: block;
  padding: 15px 0;
`;

const PaginationWrapper = styled.div`
  text-align: right;
  color: ${(props) => props.theme.PrimaryFontColor};
  position: relative;
  margin-top: 20px;

  & .rc-pagination {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-flex;
    flex-direction: row;

    & .rc-pagination-prev {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      & a {
        &:after {
          font-family: 'flexisaf-2-0';
          content: '\\f104';
          color: ${(props) => props.theme.PrimaryColor};
          /* font-size: 18px; */
          font-weight: bold;
        }
      }
    }
    & .rc-pagination-next {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      & a {
        &:after {
          font-family: 'flexisaf-2-0';
          content: '\\f105';
          color: ${(props) => props.theme.PrimaryColor};
          font-weight: bold;
        }
      }
    }
    & .rc-pagination-item {
      background: transparent;
      border: 1px solid ${(props) => props.theme.PrimaryGreyLight};
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px 0;
      box-sizing: border-box;
      font-size: 13px;
      margin: 0 5px;
      border-radius: ${(props) => props.theme.PrimaryRadius};
      transition: background-color 0.3s ease-out;
      cursor: pointer;

      & a {
        color: ${(props) => props.theme.PrimaryGreyLight};
      }
      &:hover {
        outline: none;
        border: 1px solid ${(props) => lighten(0.1, props.theme.PrimaryColor)};
        & a {
          color: ${(props) => props.theme.PrimaryColor};
        }
      }

      &.rc-pagination-disabled {
        color: #ccc;
        & a:after {
          color: #ccc;
          font-weight: normal;
        }
        &:hover {
          background: none;
        }
      }
      &.rc-pagination-item-active {
        color: #fff;
        font-weight: bold;
        /* padding: 14px 0 15px 0; */
        background-color: ${(props) => props.theme.PrimaryColor};
        margin-top: -1px;
        border: none;
        height: 40px;
        & a {
          color: #fff;
        }
      }
      &:active {
        outline: none;
      }
      &:focus {
        outline: none;
      }
    }
  }
  & .rc-pagination-jump-next,
  .rc-pagination-jump-prev {
    & a:after {
      content: none;
    }
  }
  & li.rc-pagination-total-text {
    width: auto;
    border: none;
    padding: 10px 15px;
    background: none;
    font-size: 12px;
    height: 40px;
    &:hover {
      background: none;
    }
  }
  & .page-sizer {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    width: 120px;
    text-align: left;
  }

  @media screen and (max-width: 600px) {
    & .page-sizer {
      display: none;
    }
  }
`;

export const FlexiTable = (props) => {
  const [search, setSearch] = useState(props.data);
  const [keyword, setKeyword] = useState('');

  const searchble =
    props.column &&
    props.column
      .filter((item) => item.searchable === 'searchable')
      .map((item) => item.title);

  const searchingFor = (keyword) => {
    let searchbleData = [];
    searchble.forEach((elem) => {
      let filterData = search.filter((item) => {
        return item[elem.toLowerCase()]
          .toLowerCase()
          .includes(keyword.toLowerCase());
      });
      searchbleData.push(...filterData);
    });
    return keyword ? searchbleData : search;
  };

  const searchHandler = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <TableWrapper>
      <TableFilter>
        <Grid default='1fr 2fr'>
          <Input
            name='search'
            type='search'
            placeholder={props.searchPlaceholder}
            onChange={props.searchFunc ? props.searchFunc : searchHandler}
          />
          {props.filter && <Box align=''>{props.filter}</Box>}
        </Grid>
      </TableFilter>
      {props.secondaryFilter && (
        <TableFilter>{props.secondaryFilter}</TableFilter>
      )}
      {props.data && props.data.length > 0 ? (
        <Table {...props}>
          <table>
            <thead>
              <tr>
                {props.column &&
                  props.column.map((elem, index) => {
                    return (
                      <th key={elem.key ? elem.key : index}>{elem.title}</th>
                    );
                  })}
              </tr>
            </thead>
            <tbody>
              {searchingFor(keyword).map((elem, index) => {
                return (
                  <tr key={index}>
                    {Object.keys(elem).map((entry, index) => {
                      return (
                        <td scope='row' key={index} data-label={entry}>
                          {elem[entry]}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
              {props.tableData}
            </tbody>
          </table>
        </Table>
      ) : (
          <>{props.emptyState}</>
        )}
    </TableWrapper>
  );
};

export const FlexiPagination = (props) => {
  const [pageSize, setPageSize] = useState(props.pageCounts[0]);

  const changePages = (selectedOption) => {
    setPageSize(selectedOption);
    props.changePageSize(selectedOption);
  };

  return (
    <PaginationWrapper>
      <div className='page-sizer'>
        {props.itemsDisplayed && (
          <Select
            placeholder='items'
            options={props.pageCounts}
            value={{
              value: props.pageSize,
              label: `${props.pageSize} Rows`,
            }}
            onChange={changePages}
            isSearchable={false}
          />
        )}
      </div>
      <Pagination
        {...props}
        showTotal={(total, range) =>
          `Displaying ${range[0]} - ${range[1]} out of ${total}`
        }
        pageSize={props.pageSize}
      />
    </PaginationWrapper>
  );
};

FlexiPagination.defaultProps = {
  itemsDisplayed: false,
  current: 0,
  total: 0,
};

FlexiPagination.propTypes = {
  pageCounts: PropTypes.array.isRequired,
  total: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  current: PropTypes.number,
  itemsDisplayed: PropTypes.bool,
  changePageSize: PropTypes.func,
};

Table.defaultProps = {

};
Table.propTypes = {
  cellPad: PropTypes.string,
};

FlexiTable.defaultProps = {

};

FlexiTable.propTypes = {
  stripped: PropTypes.bool,
  noBackground: PropTypes.bool,
  headBgColor: PropTypes.string,
  headFontColor: PropTypes.string,
  firstColBorder: PropTypes.bool,
  filter: PropTypes.any,
  secondaryFilter: PropTypes.any,
  columns: PropTypes.any,
  data: PropTypes.array,
  tableData: PropTypes.any,
  searchPlaceholder: PropTypes.string,
  emptyState: PropTypes.any,
  searchFunc: PropTypes.func,
  cellPad: PropTypes.string,
};
