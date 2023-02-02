import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input 
          placeholder='キーワード検索'
          type="text"
        >
        </input>
      </div>

      <div className='widgets__widgetContainer'>
        <h2>いまどうしてる?</h2>

        {/* ライブラリを追加 */}
        <TwitterTweetEmbed tweetId={"1614977265481437187"} />

        <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="kohta_piano"
            options={{height: 400}}
        />
      </div>
    </div>
  )
}

export default Widgets