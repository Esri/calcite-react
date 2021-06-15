// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledItemCard,
  StyledItemCardContent,
  StyledItemCardImageWrap,
  StyledCardItemTitle,
  StyledCardItemMetrics,
  StyledCardItemText,
  StyledCardItemIconLabelText,
  StyledUserIcon,
  StyledCalendarIcon,
  StyledActionsContainer,
  StyledDivider
} from './ArcgisItemCard-styled';

const ArcgisItemCard = ({
  item,
  showThumbnail,
  dateFormatter,
  maxDescriptionLength,
  portal,
  token,
  vertical,
  actions,
  customTitleRenderer,
  defaultThumbnailUrl,
  ...other
}) => {
  let imageEl;
  let hostname = portal ? portal.portalHostname : 'arcgis.com';
  if (showThumbnail) {
    const tokenUrlParam = token ? `?token=${token}` : '';
    const imageSource =
      item.thumbnail || !defaultThumbnailUrl
        ? `https://${hostname}/sharing/rest/content/items/${item.id}/info/${
            item.thumbnail
          }${tokenUrlParam}`
        : defaultThumbnailUrl;
    imageEl = (
      <StyledItemCardImageWrap vertical={vertical} imageSource={imageSource} />
    );
  }

  function _dateFormatter(date) {
    if (dateFormatter) {
      return dateFormatter(date);
    }

    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const language =
      navigator.userLanguage ||
      navigator.language ||
      navigator.browserLanguage ||
      navigator.systemLanguage;
    return new Date(date).toLocaleDateString(language, dateOptions);
  }

  function _textShortener(text, maxLength) {
    let suffix = '';
    const _text = text || '';
    if (_text.length > maxLength || _text.length > maxDescriptionLength) {
      suffix = '...';
    }
    return _text.substr(0, maxLength || maxDescriptionLength) + suffix;
  }

  function _getDescription() {
    if (item.snippet) {
      return (
        <StyledCardItemText title={item.snippet}>
          {_textShortener(item.snippet)}
        </StyledCardItemText>
      );
    } else {
      return null;
    }
  }

  return (
    <StyledItemCard wide={!vertical} vertical={vertical} {...other}>
      {imageEl}
      <StyledItemCardContent>
        <StyledCardItemTitle title={item.title}>
          {customTitleRenderer ? (
            customTitleRenderer(_textShortener(item.title, 70))
          ) : (
            <>{_textShortener(item.title, 70)}</>
          )}
        </StyledCardItemTitle>
        <StyledCardItemMetrics>
          <StyledCardItemIconLabelText>
            <StyledUserIcon size={16} />
            <span>{item.owner}</span>
          </StyledCardItemIconLabelText>
          <StyledCardItemIconLabelText>
            <StyledCalendarIcon size={16} />
            <span>{_dateFormatter(item.created)}</span>
          </StyledCardItemIconLabelText>
        </StyledCardItemMetrics>
        {_getDescription()}
        {actions && <StyledActionsContainer>{actions}</StyledActionsContainer>}
      </StyledItemCardContent>
    </StyledItemCard>
  );
};

ArcgisItemCard.propTypes = {
  /** The ArcGIS item used to populate the UI. */
  item: PropTypes.object,
  /** Whether the ArcgisItemCard should show a thumbnail or not. */
  showThumbnail: PropTypes.bool,
  /** A function that can be provided to customize the formatting of dates. */
  dateFormatter: PropTypes.func,
  /** Number of characters to use before truncating the description text. */
  maxDescriptionLength: PropTypes.number,
  /** AGOL portal object - if not specified will default to ArcGIS Online */
  portal: PropTypes.object,
  /** AGOL login token. */
  token: PropTypes.string,
  /** Style prop to position Card content vertically */
  vertical: PropTypes.bool,
  /** Whether the ArcgisItemCard shows an actions tab at the bottom or not */
  actions: PropTypes.object,
  /** Function to render custom elements or values in the item card title */
  customTitleRenderer: PropTypes.func,
  /** String source URL to serve as default image for invalid thumbnails */
  defaultThumbnailUrl: PropTypes.string
};

ArcgisItemCard.defaultProps = {
  showThumbnail: true,
  maxDescriptionLength: 90,
  vertical: false
};

ArcgisItemCard.displayName = 'ArcgisItemCard';

export default ArcgisItemCard;
