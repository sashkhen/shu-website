[SHU-](https://linear.app/sashkhen/project/shu-website-c8f0b9fc335c/overview)

# PR Requirements (section should be deleted)

This PR must match the following:

## Name

Name must follow this pattern:

```
[SHU-<story id>] <description>
```

For example

```
[SHU-123] Automate Changelog
```

## Labels

PR must have at least one of the follow labels:

- `breaking change` - will flag a PR as a breaking change, include this PR in the "Breaking Changes" section of the next release, and signal that the next release is a major release
- `feature` - will flag a PR as a feature and include this PR in the "Features" section of the next release
- `bug fix` - will flag a PR as a bug fix and include this PR in the "Bug Fixes" section of the next release
- `internal` - will flag a PR as an internal change (not client facing) and include this PR in the "Internal" section of the next release
- `documentation` - will flag a PR as a documentation change and include this PR in the "Internal" section of the next release
- `ignore for release` - will ensure a PR is **not** included in the next release notes - only for limited use

# What does this PR implement or fix?

-

# Testing

Hopefully, unit tests were written.

Otherwise, explain how to test this change.

# Storybook

Hopefully, storybook stories were written.

# Dependencies or Side Effects

Examples of dependencies or side effects are:

- DB migration
- dependency on another PR that needs to be merged first
