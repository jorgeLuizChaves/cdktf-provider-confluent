// https://registry.terraform.io/providers/confluentinc/confluent/2.11.0/docs/resources/tf_importer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TfImporterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.11.0/docs/resources/tf_importer#id TfImporter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `./imported_confluent_infrastructure`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.11.0/docs/resources/tf_importer#output_path TfImporter#output_path}
  */
  readonly outputPath?: string;
  /**
  * A list of resources to Import. Defaults to all Importable resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.11.0/docs/resources/tf_importer#resources TfImporter#resources}
  */
  readonly resources?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.11.0/docs/resources/tf_importer confluent_tf_importer}
*/
export class TfImporter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_tf_importer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TfImporter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfImporter to import
  * @param importFromId The id of the existing TfImporter that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.11.0/docs/resources/tf_importer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfImporter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_tf_importer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.11.0/docs/resources/tf_importer confluent_tf_importer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfImporterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TfImporterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'confluent_tf_importer',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.11.0',
        providerVersionConstraint: '~> 2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._outputPath = config.outputPath;
    this._resources = config.resources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // output_path - computed: false, optional: true, required: false
  private _outputPath?: string; 
  public get outputPath() {
    return this.getStringAttribute('output_path');
  }
  public set outputPath(value: string) {
    this._outputPath = value;
  }
  public resetOutputPath() {
    this._outputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPathInput() {
    return this._outputPath;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      output_path: cdktf.stringToTerraform(this._outputPath),
      resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resources),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_path: {
        value: cdktf.stringToHclTerraform(this._outputPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
