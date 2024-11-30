import { CdktfProviderProject } from "@cdktf/provider-project";
const project = new CdktfProviderProject({
  author: "user",
  authorAddress: "user@domain.com",
  cdktfVersion: "0.20.9",
  constructsVersion: "10.3.0",
  defaultReleaseBranch: "main",
  devDeps: ["@cdktf/provider-project"],
  jsiiVersion: "~5.5.0",
  name: "cdktf-provider-confluent",
  projenrcTs: true,
  repositoryUrl: "https://github.com/user/cdktf-provider-confluent.git",
  terraformProvider: "confluentinc/confluent@2.11.0",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();