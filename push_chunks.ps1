 = git log --reverse --format="%H"
 = 0
foreach ( in ) {
    ++
    if ( % 15 -eq 0) {
        Write-Host "Pushing chunk ..."
        git push origin ":refs/heads/main" --force
    }
}
Write-Host "Pushing final state..."
git push origin main --force
