'use strict';

module.exports.check_run = async event => {
  const body = JSON.parse(event.body)
  const action = body.action
  console.log(JSON.stringify(body))

  // const block_external_prs = true
  
  // const is_private_repo = body.repository.private
  // // TODO https://developer.github.com/v3/actions/workflow-runs/#get-a-workflow-run
  // // fetch run info from `body.check_run.url` and check event type
  // // const run_info = await fetch(body.check_run.url, <access token>)
  // // const is_push = run_info.event !== 'push'
  // const is_push = true
  // //TODO
  // // check whether pr comes from fork
  // // const is_internal_pr = run_info.repository.full_name === run_info.head_repository.full_name
  // const is_internal_pr = true;

  // let is_external_pr = !is_private_repo && !is_push && !is_internal_pr

  // if (block_external_prs && is_external_pr) {
  //   console.log('External PR detected please cancel job at ' + body.check_run.html_url);
  //   // TODO also do action
  // }

  if (action === 'created') {
    console.log('Spin up runner now')
    // TODO also do action
  }
  if (action === 'rerequested') {
    console.log('Spin up runner now to rerun job')
    // TODO also do action
  }
  if (action === 'completed') {
    console.log('Spin down runner now result ' + action.conclusion)
    // TODO also do action
  }
  return {
    statusCode: 200,
    body: 'thanks'
  };
};
