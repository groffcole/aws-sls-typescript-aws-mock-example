import SQS from "aws-sdk/clients/sqs";

export const doSomething = async (queueName: string): Promise<string | undefined> => {
  const sqs = new SQS();
  return (await sqs.getQueueUrl({ QueueName: queueName }).promise()).QueueUrl;
};
