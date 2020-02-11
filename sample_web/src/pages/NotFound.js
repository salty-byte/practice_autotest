import React from 'react';
import RouterLink from '../components/RouterLink';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h3>ページが見つかりません</h3>
        <div>お探しのページは一時的にアクセスできない状況にあるか、<br/>
        移動もしくは削除された可能性があります。<br/>
      お手数ですが、<RouterLink to="/">トップページ</RouterLink>または各コンテンツからお探しください。
        </div>
      </div>
    );
  }
}

export default NotFound;
