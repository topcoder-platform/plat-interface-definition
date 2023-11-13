module.exports = {
  branches :
           [
             'main', {name : 'PLAT-*', channel : 'beta', prerelease : true},
             {name : 'CORE-*', channel : 'beta', prerelease : true}
           ],
  plugins :
          [
            '@semantic-release/commit-analyzer',
            '@semantic-release/release-notes-generator',
            '@semantic-release/changelog', '@semantic-release/npm',
            [
              '@semantic-release/github', {
                assets :
                [
                  {path : 'dist/*.tar.gz', label : 'Binary'},
                  {path : 'dist/*.zip', label : 'Compressed'}
                ]
              }
            ]
          ],
  preset : 'angular',
  parserOpts : {
    preset : 'angular',
    releaseRules :
    [
      {breaking : true, release : 'major'},
      {type : 'feat', release : 'minor'},
      {type : 'fix', release : 'patch'},
      {type : 'chore', release : 'patch'},
      {type : 'docs', release : 'patch'},
    ]
  }
};
