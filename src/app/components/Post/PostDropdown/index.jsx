import React from 'react';

import { Dropdown, DropdownRow, DropdownLinkRow } from 'app/components/Dropdown';

const T = React.PropTypes;

export default function PostDropdown(props) {
  const {
    id,
    canModify,
    permalink,
    subreddit,
    author,
    isLoggedIn,
    isSaved,
    onToggleEdit,
    onToggleHide,
    onReportPost,
    onToggleSave,
  } = props;

  return (
    <Dropdown id={ id }>
      { canModify && <DropdownRow icon='post_edit' text='Edit Post' onClick={ onToggleEdit } /> }
      <DropdownLinkRow href={ permalink } icon='link' text='Permalink'/>
      <DropdownLinkRow href={ `/r/${subreddit}` } icon='snoosilhouette' text={ `More from r/${subreddit}` }/>
      <DropdownLinkRow href={ `/user/${author}` } icon='user-account' text={ `${author}'s profile` }/>
      { isLoggedIn ? <DropdownRow icon='save' text={ isSaved ? 'Saved' : 'Save' } onClick={ onToggleSave } isSelected={ isSaved }/> : null }
      { isLoggedIn ? <DropdownRow icon='hide' text='Hide' onClick={ onToggleHide }/> : null }
      { isLoggedIn ? <DropdownRow onClick={ onReportPost } icon='flag' text='Report'/> : null }
    </Dropdown>
  );
}

PostDropdown.propTypes = {
  id: T.string.isRequired,
  canModify: T.bool, // can edit / can delete
  permalink: T.string.isRequired,
  subreddit: T.string.isRequired,
  author: T.string.isRequired,
  isSaved: T.bool,
  isLoggedIn: T.bool,
  onToggleSave: T.func,
  onToggleHide: T.func,
  onReportPost: T.func.isRequired,
  onToggleEdit: T.func,
};

PostDropdown.defaultProps = {
  canModify: false,
  isSaved: false,
  isLoggedIn: false,
  onToggleSave: () => {},
  onToggleHide: () => {},
  onToggleEdit: () => {},
};
